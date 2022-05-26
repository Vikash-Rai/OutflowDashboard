import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import axios from "../../utils/axios";

const initialState = {
  tokens: [],
  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: "authTokens",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getTokensSuccess(state, action) {
      state.isLoading = false;
      state.tokens = action.payload;
    },

    generateTokenSuccess(state, action) {
      state.isLoading = false;
      state.tokens = [...state.tokens, action.payload];
    },
  },
});

export default slice.reducer;

export function getTokens() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/authTokens");
      dispatch(slice.actions.getTokensSuccess(response.data.tokens));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function generateToken() {
  return async () => {
    dispatch(slice.actions.startLoading());
    const token = token();

    try {
      const response = await axios.post("/authTokens", {data: token});
      dispatch(slice.actions.generateTokenSuccess(response.data.token));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  }
}

const rand = () => {
  return Math.random().toString(36).substring(2);
};

const token = () => {
  return rand() + rand();
};
