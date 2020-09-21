import React from "react";

import { useListCourse } from "../../../hooks/Course";
import { useListSubject } from "../../../hooks/Subject";

function Home() {
  const listCourse = useListCourse();
  const listSubject = useListSubject();
  const renderListCoures = () => {
    return listCourse.map((course, index) => {
      if (index / 2 == 0) {
        return (
          <div className="col-3 mt-5 mb-3" key={index}>
            <div className="card text-left">
              <img
                className="card-img-top"
                src="https://linkerpt.com/wp-content/uploads/2018/09/khoa-hoc-lap-trinh-c.png"
              />
              <div className="card-body">
                <h4 className="card-title">{course.name}</h4>
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
                <h4 className="card-title">{course.name}</h4>
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
      <div className="row">
        {renderListCoures()} {renderListCoures()}
        {renderListCoures()}
        {renderListCoures()}
      </div>
    </div>
  );
}

export default Home;
