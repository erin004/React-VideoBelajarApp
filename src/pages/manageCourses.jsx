import { useState, useEffect } from "react";
import { courses as initialCourses } from "../data/courses";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

// helper untuk konversi file ke Base64
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });

const ManageCourses = () => {
  const [courseList, setCourseList] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved ? JSON.parse(saved) : initialCourses;
  });

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    author: "",
    role: "",
    price: "",
    image: null,
    avatar: null,
  });

  const [editingId, setEditingId] = useState(null);

  // simpan ke localStorage
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courseList));
  }, [courseList]);

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageBase64 = formData.image;
    let avatarBase64 = formData.avatar;

    // kalau file object, convert ke base64
    if (formData.image instanceof File) {
      imageBase64 = await fileToBase64(formData.image);
    }
    if (formData.avatar instanceof File) {
      avatarBase64 = await fileToBase64(formData.avatar);
    }

    if (editingId) {
      // UPDATE
      setCourseList(
        courseList.map((c) =>
          c.id === editingId
            ? {
                ...c,
                title: formData.title,
                desc: formData.desc,
                author: formData.author,
                role: formData.role,
                price: formData.price,
                image: imageBase64 || c.image,
                avatar: avatarBase64 || c.avatar,
              }
            : c
        )
      );
      setEditingId(null);
    } else {
      // CREATE
      const newCourse = {
        id: Date.now(),
        title: formData.title,
        desc: formData.desc,
        author: formData.author,
        role: formData.role,
        price: formData.price,
        image: imageBase64 || "/assets/header.jpg",
        avatar: avatarBase64 || "/assets/header.jpg",
      };
      setCourseList([...courseList, newCourse]);
    }

    // reset form
    setFormData({
      title: "",
      desc: "",
      author: "",
      role: "",
      price: "",
      image: null,
      avatar: null,
    });
  };

  // DELETE
  const deleteCourse = (id) => {
    setCourseList(courseList.filter((c) => c.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        title: "",
        desc: "",
        author: "",
        role: "",
        price: "",
        image: null,
        avatar: null,
      });
    }
  };

  // EDIT 
  const editCourse = (course) => {
    setEditingId(course.id);
    setFormData({
      title: course.title,
      desc: course.desc,
      author: course.author,
      role: course.role,
      price: course.price,
      image: course.image,
      avatar: course.avatar,
    });
    window.scrollTo({ top: 0, behavior: "smooth" }); // biar form kelihatan
  };

  return (
    <div className="bg-[#FEFDF6] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 mt-10">
        {/* Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary">
            Manage Courses
          </h2>
          <Link
            to="/"
            className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
          >
            ← Kembali ke Home
          </Link>
        </div>

        {/* Form */}
        <section className="bg-white rounded-lg shadow-sm border p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Course" : "Tambah Course Baru"}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Judul Course"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Deskripsi"
              value={formData.desc}
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Harga (contoh: Rp 200K)"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="border p-2 rounded"
              required
            />

            {/* Upload Image */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Image Content
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
                className="border p-2 rounded w-full"
              />
              {formData.image && typeof formData.image === "string" ? (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-2 w-32 h-20 object-cover rounded"
                />
              ) : formData.image ? (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Preview"
                  className="mt-2 w-32 h-20 object-cover rounded"
                />
              ) : null}
            </div>

            {/* Upload Avatar */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Avatar Author
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, avatar: e.target.files[0] })
                }
                className="border p-2 rounded w-full"
              />
              {formData.avatar && typeof formData.avatar === "string" ? (
                <img
                  src={formData.avatar}
                  alt="Preview"
                  className="mt-2 w-16 h-16 object-cover rounded-full"
                />
              ) : formData.avatar ? (
                <img
                  src={URL.createObjectURL(formData.avatar)}
                  alt="Preview"
                  className="mt-2 w-16 h-16 object-cover rounded-full"
                />
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className={`${
                  editingId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
                } text-white px-4 py-2 rounded`}
              >
                {editingId ? "Update Course" : "Tambah Course"}
              </button>
            </div>
          </form>
        </section>

        {/* List */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Daftar Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courseList.map((course) => (
              <div key={course.id} className="relative">
                <Card {...course} />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => editCourse(course)}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCourse(course.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ManageCourses;
