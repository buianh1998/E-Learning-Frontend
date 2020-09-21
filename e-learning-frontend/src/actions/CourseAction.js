import { getManyCourse } from "../apis/CourseAPI";
import { GET_COURSE } from "../constansts/CourseConstanst";

const { default: Axios } = require("axios");

function actionCourse(type, data) {
  return {
    type: type,
    data: data,
  };
}

export function getListCourse() {
  return async (dispatch) => {
    const course = await getManyCourse();
    return dispatch(actionCourse(GET_COURSE, course.data.data.data));
  };
}
