import { GET_COURSE, GET_DETAIL_COURSE } from "../constansts/CourseConstanst";

const courseState = {
  listCourse: [],
  pagination: {
    skip: 8,
    offset: 0,
  },
  total: 0,
  detailCourse: {
    id: "",
    name: "",
    description: "",
    price: "",
    subject: {},
  },
};

export const CourseReducer = (state = courseState, action) => {
  switch (action.type) {
    case GET_COURSE:
      {
        state.listCourse = action.data.data;
        state.total = action.data.total;
      }
      return { ...state };
    case GET_DETAIL_COURSE:
      {
        state.detailCourse = action.data;
      }
      return { ...state };

    default:
      return { ...state };
  }
};
