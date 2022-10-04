import { createSlice } from "@reduxjs/toolkit";

const testReducer = createSlice({
    name: 'test',
    initialState: {
        listProject: []
    },
    reducers: {
        getListProject: (state, action) => {
            state.listProject = action.payload;
        }
    }
})

export default testReducer