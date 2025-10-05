import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCourses,
  addCourseAPI,
  editCourseAPI,
  deleteCourseAPI,
} from "../../services/api";

// GET
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const data = await getCourses();
    return data;
  }
);

// ADD
export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (course) => {
    const newCourse = await addCourseAPI(course);
    return newCourse;
  }
);

// EDIT
export const editCourse = createAsyncThunk(
  "courses/editCourse",
  async ({ id, course }) => {
    const updated = await editCourseAPI(id, course);
    return updated;
  }
);

// DELETE
export const removeCourse = createAsyncThunk(
  "courses/removeCourse",
  async (id) => {
    await deleteCourseAPI(id);
    return id;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // ADD
      .addCase(addCourse.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // EDIT
      .addCase(editCourse.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) state.items[index] = action.payload;
      })

      // DELETE
      .addCase(removeCourse.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default coursesSlice.reducer;
