import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSubject } from "./../actions/SubjectAction";
export function useListSubject() {
  const listSubject = useSelector((state) => state.SubjectReducer.subjectList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListSubject());
  }, []);
  return listSubject;
}
