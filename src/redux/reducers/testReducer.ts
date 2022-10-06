import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataResponse } from "../../Common/common";

const initialState = {
  listProject: {
    data: new Array<any>(),
    message: "",
    page: "",
    perPage: "",
    statusCode: 0,
    total: 0,
  },
};

const testReducer = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    getListProject: (state, action: PayloadAction<dataResponse>) => {
      state.listProject = action.payload;
    },
  },
});

export default testReducer;
