import { getManyCourse, getCourseById } from "../apis/CourseAPI";
import { GET_COURSE, GET_DETAIL_COURSE } from "../constansts/CourseConstanst";

const { default: Axios } = require("axios");

function actionCourse(type, data) {
  return {
    type: type,
    data: data,
  };
}

export function getListCourse(options) {
  return async (dispatch) => {
    const courses = await getManyCourse(options);
    return dispatch(actionCourse(GET_COURSE, courses.data.data));
  };
}

export function getDetailCourse(idCourse) {
  return async (dispatch) => {
    try {
      let course = await getCourseById(idCourse);
      return dispatch(actionCourse(GET_DETAIL_COURSE, course.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
