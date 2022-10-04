import { createSlice } from "@reduxjs/toolkit";

const testReducer = createSlice({
    name: 'test',
    initialState: {
        test: [1, 2, 3]
    },
    reducers: {
        addNumber: (state, action) => {
            state.test.push(action.payload)
        }
    }
})

export default testReducer