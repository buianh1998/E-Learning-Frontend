import React from "react";
import { useParams } from "react-router-dom";
import { useDetail } from "../../../hooks/Course";
function Detail() {
  const { id } = useParams();

  const detailCourse = useDetail(id);
  return (
    <div className="container mt-3">
      <h3 className="display-4 text-center">Detail Course</h3>
      <div className="card text-left">
        <div className="row">
          <div className="col-4">
            <img
              className="card-img-top"
              src={
                detailCourse.subject.id !==
                "0a838f7c-ba5d-45c4-8d6f-3a08d08df633"
                  ? "https://linkerpt.com/wp-content/uploads/2018/09/khoa-hoc-lap-trinh-c.png"
                  : "https://moon.vn/Upload/Users1/binhnguyentrang/Tunganh/tieng_anh_cho_nguoi_mat_goc.jpg"
              }
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>: {detailCourse.name}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>: {detailCourse.description}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>: {detailCourse.price}</td>
                  </tr>
                  <tr>
                    <th>Subject</th>
                    <td>: {detailCourse.subject.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Add To Cart
                      </button>
                    </td>
                    <th></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
