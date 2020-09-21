import React from "react";

export default function Footer() {
  return (
    <footer
      className="page-footer font-small unique-color-dark  mt-2"
      style={{ backgroundColor: "#a3a6a9" }}
    >
      <div className="container text-center text-md-left mt-5 pt-3">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">E-learning</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Course</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <a href="#!">MDBootstrap</a>
            </p>
            <p>
              <a href="#!">MDWordPress</a>
            </p>
            <p>
              <a href="#!">BrandFlow</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bold">Accout</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <i className="fas fa-home mr-3" /> HCM, VN
            </p>
            <p>
              <i className="fas fa-envelope mr-3" /> buitheanh1798@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3" /> + 84 33 362 65 90
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 bg-secondary">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
}
