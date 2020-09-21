import { GET_SUBJECT } from "../constansts/SubjectConstanst";

const subjectState = {
  subjectList: [],
};

export const SubjectReducer = (state = subjectState, action) => {
  switch (action.type) {
    case GET_SUBJECT:
      {
        state.subjectList = action.data;
      }
      return { ...state };

    default:
      return { ...state };
  }
};
