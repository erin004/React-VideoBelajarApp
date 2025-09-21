// src/pages/ManageCourses.jsx
import { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; 
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CourseCard from "../components/card";
import { Link } from "react-router-dom";

const ManageCourses = () => {
  const [courseList, setCourseList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    author: "",
    role: "",
    price: "",
    image: "",
    avatar: "",
  });
  const [editingId, setEditingId] = useState(null);

  // listen Firestore realtime
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "course"), (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setCourseList(data);
    });
    return () => unsub();
  }, []);

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      // UPDATE FIRESTORE
      await updateDoc(doc(db, "course", editingId), {
        title: formData.title,
        desc: formData.desc,
        author: formData.author,
        role: formData.role,
        price: formData.price,
        image: formData.image,
        avatar: formData.avatar,
      });
      setEditingId(null);
    } else {
      // CREATE FIRESTORE
      await addDoc(collection(db, "course"), {
        title: formData.title,
        desc: formData.desc,
        author: formData.author,
        role: formData.role,
        price: formData.price,
        image: formData.image,
        avatar: formData.avatar,
      });
    }

    // reset form
    setFormData({
      title: "",
      desc: "",
      author: "",
      role: "",
      price: "",
      image: "",
      avatar: "",
    });
  };

  // DELETE
  const deleteCourse = async (id) => {
    await deleteDoc(doc(db, "course", id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        title: "",
        desc: "",
        author: "",
        role: "",
        price: "",
        image: "",
        avatar: "",
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              placeholder="Harga (contoh: 200K)"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              placeholder="Link Image Content"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              placeholder="Link Avatar Author"
              value={formData.avatar}
              onChange={(e) =>
                setFormData({ ...formData, avatar: e.target.value })
              }
              className="border p-2 rounded"
              required
            />

            <div className="sm:col-span-2">
              <button
                type="submit"
                className={`${
                  editingId
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-green-500 hover:bg-green-600"
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
                <CourseCard {...course} /> {/* penting: spread props */}
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
