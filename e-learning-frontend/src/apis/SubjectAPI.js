import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8080/API",
});
export function getManySubject() {
  return axios.get("http://localhost:8080/API/subjects");
}
