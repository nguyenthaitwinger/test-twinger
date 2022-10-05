import { params } from "../../Common/common";
// import { getListProject } from "../../services/testServices";
// import testReducer from "../reducers/testReducer.tsx";
import { GET_LIST_PROJECT } from "../types/testTypes";

// export const getListProjectAction = (page:number, search:string, sort:string) => {
//   return async (dispatch, getState) => {
//     try {
//       const result = await getListProject(page, search, sort);
//       dispatch(testReducer.actions.getListProject(result.data));
//     } catch (err) {}
//     // dispatch(testReducer.actions.addNumber(newData))
//   };
// };

export const getListProjectCreator = (params: params) => {
  return {
    type: GET_LIST_PROJECT,
    params,
  };
};
