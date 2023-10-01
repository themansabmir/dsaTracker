import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axiosHandler";

export const getQuestions = createAsyncThunk(
  "dsa/getAll",
  async (_, { rejectWithValue }) => {
    try {
      return await api.get("/auth/questions").then((res) => res.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getQuestionById = createAsyncThunk(
  "dsa/byid",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api
        .post("/auth/questionById", data)
        .then((res) => res.data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createQuestion = createAsyncThunk(
  "dsa/create",
  async (data, { rejectWithValue }) => {
    try {
      return await api.post("/auth/questions", data).then((res) => res.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  isError: false,
  isCreated: false,
  data: [],
  question: "",
};

export const dsaSlice = createSlice({
  name: "dsa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.data = [action.payload.data, ...state.data];
        state.isCreated = true;
      })
      .addCase(getQuestionById.fulfilled, (state, action) => {
        state.question = action.payload;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isCreated= false
      });
  },
});

export const questions = (state) => state?.dsa?.data;
export const singleQuestion = (state) => state?.dsa.question.msg;
export const created = state => state?.dsa?.isCreated
// Action creators are generated for each case reducer function

export default dsaSlice.reducer;
