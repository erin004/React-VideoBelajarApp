import axios from "axios";

const PROJECT_ID = "videobelajar-4bca5";
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/course`;

// 🔧 Helper: ambil value dari setiap field Firestore
function getField(field) {
  if (!field) return null;
  if (field.stringValue !== undefined) return field.stringValue;
  if (field.integerValue !== undefined) return field.integerValue;
  if (field.doubleValue !== undefined) return field.doubleValue;
  if (field.booleanValue !== undefined) return field.booleanValue;
  return null;
}

// ✅ GET ALL — ambil semua course dari Firestore
export async function getCourses() {
  const res = await axios.get(BASE_URL);
  if (!res.data.documents) return [];
  return res.data.documents.map((doc) => ({
    id: doc.name.split("/").pop(),
    title: getField(doc.fields.title) || "Untitled",
    author: getField(doc.fields.author) || "Unknown",
    desc: getField(doc.fields.desc) || "",
    role: getField(doc.fields.role) || "",
    price: getField(doc.fields.price) || "",
    image: getField(doc.fields.image) || "/assets/header.jpg",
    avatar: getField(doc.fields.avatar) || "/assets/header.jpg",
  }));
}

// ✅ CREATE — tambah course baru
export async function addCourseAPI(course) {
  const res = await axios.post(BASE_URL, {
    fields: {
      title: { stringValue: course.title },
      desc: { stringValue: course.desc },
      author: { stringValue: course.author },
      role: { stringValue: course.role },
      price: { stringValue: course.price },
      image: { stringValue: course.image || "/assets/header.jpg" },
      avatar: { stringValue: course.avatar || "/assets/header.jpg" },
    },
  });

  // ambil ID dari Firestore response
  const id = res.data.name.split("/").pop();
  return { id, ...course };
}

// ✅ UPDATE — edit course berdasarkan ID
export async function editCourseAPI(id, course) {
  await axios.patch(`${BASE_URL}/${id}`, {
    fields: {
      title: { stringValue: course.title },
      desc: { stringValue: course.desc },
      author: { stringValue: course.author },
      role: { stringValue: course.role },
      price: { stringValue: course.price },
      image: { stringValue: course.image || "/assets/header.jpg" },
      avatar: { stringValue: course.avatar || "/assets/header.jpg" },
    },
  });

  // return data yang udah diupdate biar langsung ke Redux
  return { id, ...course };
}

// ✅ DELETE — hapus course berdasarkan ID
export async function deleteCourseAPI(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
}
