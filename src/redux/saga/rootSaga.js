import { all } from 'redux-saga/effects'
import { followGetListProject } from './TestSaga'


export function* rootSaga() {
    yield all([
        followGetListProject(),
    ])
}