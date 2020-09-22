import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCourse, getListCourse } from "./../actions/CourseAction";
import queryString from "query-string";
export function useListCourse() {
  const listCourse = useSelector((state) => state.CourseReducer.listCourse);
  const total = useSelector((state) => state.CourseReducer.total);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCourse("limit=8&offset=0"));
  }, []);
  return { listCourse, total };
}

export function useDetail(idCourse) {
  // get course detail to reducer
  const detailCourse = useSelector((state) => state.CourseReducer.detailCourse);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch action get detail course to reducer handel
    dispatch(getDetailCourse(idCourse));
  }, []);

  return detailCourse;
}
// export function usePaginationCourse() {
//   const listCourse = useSelector((state) => state.CourseReducer.listCourse);
//   const total = useSelector((state) => state.CourseReducer.total);
//   const dispatch = useDispatch();
//   // using useState for check header and pagination
//   const [filters, setFilters] = useState({ limit: 8, offset: 0 });
//   useEffect(() => {
//     const parseString = queryString.stringify(filters);
//     dispatch(getListCourse(parseString));
//   }, [filters]);
//   return { listCourse, total, filters };
// }
