import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCourse } from "./../actions/CourseAction";
export function useListCourse() {
  const listCourse = useSelector((state) => state.CourseReducer.listCourse);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCourse());
  }, []);
  return listCourse;
}
