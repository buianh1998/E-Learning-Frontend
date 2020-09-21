import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubject } from "../../../actions/SubjectAction";
function Home() {
  const listSubject = useSelector((state) => state.SubjectReducer.subjectList);
  const dispatch = useDispatch();
  console.log(listSubject);
  useEffect(() => {
    dispatch(getSubject());
  }, []);
  return <div className="container mt-3">Home</div>;
}

export default Home;
