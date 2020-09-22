import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { getListCourse } from "../../../actions/CourseAction";
import { Link } from "react-router-dom";

function Course() {
  // get list course from  reducer
  const listCourse = useSelector((state) => state.CourseReducer.listCourse);
  const total = useSelector((state) => state.CourseReducer.total);
  const dispatch = useDispatch();
  // using useState for check header and pagination
  const [filters, setFilters] = useState({ limit: 8, offset: 0 });
  useEffect(() => {
    const parseString = queryString.stringify(filters);
    dispatch(getListCourse(parseString));
  }, [filters]);

  // render list course to lay out
  const renderListCoures = () => {
    return listCourse.map((course, index) => {
      // if subject of course is a english render with image is english basic
      return (
        <div className="col-3 mt-5 mb-3" key={index}>
          <div className="card text-left">
            <img
              className="card-img-top"
              src={
                course.subject.id !== "0a838f7c-ba5d-45c4-8d6f-3a08d08df633"
                  ? "https://linkerpt.com/wp-content/uploads/2018/09/khoa-hoc-lap-trinh-c.png"
                  : "https://moon.vn/Upload/Users1/binhnguyentrang/Tunganh/tieng_anh_cho_nguoi_mat_goc.jpg"
              }
            />
            <div className="card-body">
              <h4 className="card-title text-dark">
                <Link to={`/course/${course.id}`}>{course.name}</Link>
              </h4>
              <p className="card-text">{course.description}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  const handelFilters = (newOffset) => {
    setFilters({ ...filters, offset: newOffset });
  };
  // render pagiantion of page course
  const renderPagination = () => {
    let arrPagination = [];

    for (let i = 1; i <= Math.ceil(total / 8); i++) {
      if ((i - 1) * 8 == filters.offset) {
        arrPagination.push(
          <li
            className="page-item active"
            key={i}
            onClick={() => {
              handelFilters((i - 1) * filters.limit);
            }}
          >
            <a className="page-link">{i}</a>
          </li>
        );
      } else {
        arrPagination.push(
          <li
            className="page-item"
            key={i}
            onClick={() => {
              handelFilters((i - 1) * filters.limit);
            }}
          >
            <a className="page-link" href="#">
              {i}
            </a>
          </li>
        );
      }
    }

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li
            className={filters.offset < 1 ? "page-item disabled" : "page-item"}
            onClick={() => {
              handelFilters(filters.offset - filters.limit);
            }}
          >
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {arrPagination}
          <li
            className={
              filters.offset >= Math.ceil(total / 8)
                ? "page-item disabled"
                : "page-item"
            }
            onClick={() => {
              handelFilters(filters.offset + filters.limit);
            }}
          >
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="container mt-3">
      <h3 className="display-4 text-center">Course E-Learning</h3>
      <div className="row">{renderListCoures()}</div>
      {renderPagination()}
    </div>
  );
}

export default Course;
