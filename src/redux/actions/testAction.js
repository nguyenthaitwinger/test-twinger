import testReducer from "../reducers/testReducer";

export const addTest = (number) => {
    return (dispatch, getState) => {
        const newData = Number(number) + 1;
        dispatch(testReducer.actions.addNumber(newData))
    }
}