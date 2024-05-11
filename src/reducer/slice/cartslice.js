import { createSlice } from "@reduxjs/toolkit";
const initialState={
    token:localStorage.getItem("totalitems") ?JSON.parse(localStorage.getItem("totalitems")):0
}
const authslice=createSlice({
    name:"cart",
    initialState,
    settotalitems(state,value){
        state.token=value.payload
    }
})
export const {settotalitems}=authslice.actions
export default authslice.reducer;