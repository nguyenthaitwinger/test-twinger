import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataResponse, ProjectItem } from "../../Common/common";

const initialState = {
  listProject: {},
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
