import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  addCourse,
  editCourse,
  removeCourse,
} from "./coursesSlice";

export default function useCourses() {
  const dispatch = useDispatch();

  const courseList = useSelector((state) => state.courses.items);
  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);

  const reload = useCallback(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const create = useCallback(
    (course) => {
      dispatch(addCourse(course));
    },
    [dispatch]
  );

  const update = useCallback(
    (id, course) => {
      dispatch(editCourse({ id, course }));
    },
    [dispatch]
  );

  const remove = useCallback(
    (id) => {
      dispatch(removeCourse(id));
    },
    [dispatch]
  );

  return { courseList, status, error, reload, create, update, remove };
}
