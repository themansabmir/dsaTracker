import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axiosHandler";

export const login = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/login", data).then((res) => res.data);
      localStorage.setItem("token", res.token);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "register",
  async (data, { rejectWithValue }) => {
    try {
      return await api.post("/signup", data).then((res) => res.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  token: localStorage.getItem("token"),
  user: "",
  isLoading: "",
  isError: "",
  isLoggedin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = action.payload;
      });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true;
    });
  },
});


export const isLoggedin = state => state?.user?.isLoggedin;

export default userSlice.reducer;
