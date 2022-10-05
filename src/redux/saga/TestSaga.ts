import { call, put, takeLatest } from "redux-saga/effects";
import { getListProjectSaga } from "../../services/testServices";
import testReducer from "../reducers/testReducer";
import { GET_LIST_PROJECT } from "../types/testTypes";
import { action, resultResponse } from "../../Common/common";

function* getListProject(params: action) {
  try {
    const result: resultResponse = yield call(() =>
      getListProjectSaga(params.params)
    );

    yield put(testReducer.actions.getListProject(result.data));
  } catch (e) {
    console.log(e);
  }
}

export function* followGetListProject() {
  yield takeLatest(GET_LIST_PROJECT, getListProject);
}
