import React from "react";
import { Link } from "react-router-dom";

import { useListCourse } from "../../../hooks/Course";

function Home() {
  const { listCourse, total } = useListCourse();
  const renderListCoures = () => {
    return listCourse.map((course, index) => {
      if (course.subject.id !== "0a838f7c-ba5d-45c4-8d6f-3a08d08df633") {
        return (
          <div className="col-3 mt-5 mb-3" key={index}>
            <div className="card text-left">
              <img
                className="card-img-top"
                src="https://linkerpt.com/wp-content/uploads/2018/09/khoa-hoc-lap-trinh-c.png"
              />
              <div className="card-body">
                <Link to={`/course/${course.id}`}>{course.name}</Link>
                <p className="card-text">{course.description}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="col-3 mt-5 mb-3" key={index}>
            <div className="card text-left">
              <img
                className="card-img-top"
                src="https://moon.vn/Upload/Users1/binhnguyentrang/Tunganh/tieng_anh_cho_nguoi_mat_goc.jpg"
              />
              <div className="card-body">
                <Link to={`/course/${course.id}`}>{course.name}</Link>
                <p className="card-text">{course.description}</p>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div className="container mt-3">
      <h3 className="display-4 text-center">Home E-Learning</h3>
      <div className="row">{renderListCoures()}</div>
    </div>
  );
}

export default Home;
