import { call, put, takeLatest } from "redux-saga/effects";
import { getListProjectSaga } from "../../services/testServices";
import testReducer from "../reducers/testReducer";
import { GET_LIST_PROJECT } from "../types/testTypes";

function* getListProject(params) {
    try {
        const result = yield call(() => getListProjectSaga(params.params));

        yield put(testReducer.actions.getListProject(result.data));

    } catch (e) {
        console.log(e);
    }
}

export function* followGetListProject() {
    yield takeLatest(GET_LIST_PROJECT, getListProject)
}