const { default: Axios } = require("axios");

const axios = Axios.create({
  // default base url
  baseURL: "http://localhost:8080/API",
});

export async function getManyCourse(options) {
  // url of course router
  return await axios.get(`/courses?${options}`);
}

export async function getCourseById(idCourse) {
  // url get detail course with id = idcourse
  return await axios.get(`/courses/${idCourse}`);
}
