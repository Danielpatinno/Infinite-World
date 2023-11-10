import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import managerService from "../services/managerService";

const manager = JSON.parse(localStorage.getItem("manager"))

const initialState = {
    manager: manager ? manager : null,
    error: false,
    success: false,
    loading: false,
};

export const login = createAsyncThunk("manager/login",
  async(manager, thunkAPI) => {
  
    const data = await managerService.login(manager)

    if(data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data;
  }
)

export const logout = createAsyncThunk("manager/logout", 
  async () => {
    await managerService.logout()
  }
);

export const managerSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        reset: (state) => {
          state.loading = false;
          state.error = null;
          state.success = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.manager = action.payload;
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.manager = null
        }).addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.manager = null;
        })
    }
})

export const {reset} = managerSlice.actions

export default managerSlice.reducer;