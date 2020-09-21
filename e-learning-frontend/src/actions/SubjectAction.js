import { getManySubject } from "../apis/SubjectAPI";
import { GET_SUBJECT } from "../constansts/SubjectConstanst";

// action handing data to api reponse to client
export function actionSubject(type, data) {
  return {
    type: type,
    data: data,
  };
}

export function getSubject() {
  return async (dispatch) => {
    try {
      let subject = await getManySubject();
      return dispatch(actionSubject(GET_SUBJECT, subject.data.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
