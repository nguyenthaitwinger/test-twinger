import { getListProject } from "../../services/testServices";
import testReducer from "../reducers/testReducer";

export const getListProjectAction = (page, search, sort) => {
    return async (dispatch, getState) => {
        try {
            const result = await getListProject(page, search, sort);
            dispatch(testReducer.actions.getListProject(result.data))
        } catch (err) {

        }
        // dispatch(testReducer.actions.addNumber(newData))
    }
}