import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
   
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
       
        setLoading(state, action) { // Corrected the reducer definition
            state.loading = action.payload; // Access action.payload instead of value.payload
        }
    }
});

export const { setUser,  setLoading } = profileSlice.actions;
export default profileSlice.reducer;