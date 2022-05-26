import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import axios from "../../utils/axios";

const initialState = {
    summaryData: [],
    error: null,
    isLoading: false,
};

const slice = createSlice({
    name: "reporting",
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
    
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        getSummaryDataSuccess(state, action) {
            state.isLoading = false;
            state.summaryData = action.payload;
        },

    }
});

export default slice.reducer;

export function getSummaryData() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get('/getSummary');
            dispatch(slice.actions.getSummaryDataSuccess(response.data.summaryData));
        } catch(error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}
  