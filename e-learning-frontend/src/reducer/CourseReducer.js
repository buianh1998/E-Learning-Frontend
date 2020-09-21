import { GET_COURSE } from "../constansts/CourseConstanst";

const courseState = {
  listCourse: [],
};

export const CourseReducer = (state = courseState, action) => {
  switch (action.type) {
    case GET_COURSE:
      {
        state.listCourse = action.data;
      }
      return { ...state };

    default:
      return { ...state };
  }
};
