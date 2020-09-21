const { default: Axios } = require("axios");

const axios = Axios.create({
  baseURL: "http://localhost:8080/API",
});

export async function getManyCourse() {
  return await axios.get("/courses");
}
