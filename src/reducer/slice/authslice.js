import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    loading: false,
    signUpData: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        setSignUpData(state, action) { // Corrected the reducer definition
            state.signUpData = action.payload; // Access action.payload instead of value.payload
        },
        setLoading(state, action) { // Corrected the reducer definition
            state.loading = action.payload; // Access action.payload instead of value.payload
        }
    }
});

export const { setToken, setSignUpData, setLoading } = authSlice.actions;
export default authSlice.reducer;

