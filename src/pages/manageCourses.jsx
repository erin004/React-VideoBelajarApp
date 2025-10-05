import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import { Link } from "react-router-dom";
import useCourses from "../store/redux/useCourses"; // ✅ custom hook dari redux folder

const ManageCourses = () => {
  const { courseList, status, error, reload, create, update, remove } = useCourses();

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

  useEffect(() => {
    if (status === "idle") reload();
  }, [status, reload]);

  const resetForm = () => {
    setFormData({
      title: "",
      desc: "",
      author: "",
      role: "",
      price: "",
      image: "",
      avatar: "",
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await update(editingId, formData);
      } else {
        await create(formData);
      }
      resetForm();
    } catch (err) {
      alert("Gagal menyimpan data. Cek console.");
      console.error(err);
    }
  };

  const handleEdit = (course) => {
    setEditingId(course.id);
    setFormData({
      title: course.title || "",
      desc: course.desc || "",
      author: course.author || "",
      role: course.role || "",
      price: course.price || "",
      image: course.image || "",
      avatar: course.avatar || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus course ini?")) return;
    try {
      await remove(id);
    } catch (err) {
      alert("Gagal menghapus. Cek console.");
      console.error(err);
    }
  };

  return (
    <div className="bg-[#FEFDF6] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Manage Courses</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            ← Kembali
          </Link>
        </div>

        {/* Form Section */}
        <section className="bg-white border shadow-sm rounded-lg p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Course" : "Tambah Course"}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Judul"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Deskripsi"
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Harga"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              placeholder="URL Gambar"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              placeholder="URL Avatar"
              value={formData.avatar}
              onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
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
                {editingId ? "Update" : "Tambah"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="ml-2 bg-gray-300 px-3 py-2 rounded"
                >
                  Batal
                </button>
              )}
            </div>
          </form>
        </section>

        {/* List Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Daftar Course</h3>
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p className="text-red-600">Error: {error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courseList.map((course) => (
              <div key={course.id} className="relative">
                <Card {...course} />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(course)}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
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
