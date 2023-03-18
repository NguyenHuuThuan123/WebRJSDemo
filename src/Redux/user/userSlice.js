import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const getUserfromStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialValue = {
    user: getUserfromStorage || [],
}

export const loginUser = createAsyncThunk("auth/login", async(userData, thunkApi) => {
    try {
        // return await 
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})