import axios from "axios";

const PROJECT_ID = "videobelajar-4bca5";
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/course`;

// helper convert field
function getField(field) {
  if (!field) return null;
  if (field.stringValue !== undefined) return field.stringValue;
  if (field.integerValue !== undefined) return field.integerValue;
  if (field.doubleValue !== undefined) return field.doubleValue;
  if (field.booleanValue !== undefined) return field.booleanValue;
  return null;
}

// GET all
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

// CREATE
export async function createCourse(course) {
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
  return res.data;
}

// UPDATE
export async function updateCourse(id, course) {
  const res = await axios.patch(`${BASE_URL}/${id}`, {
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
  return res.data;
}

// DELETE
export async function deleteCourseAPI(id) {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
}
