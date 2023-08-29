import { createSlice } from "@reduxjs/toolkit";

const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState: {
        data: {}
    },
    reducers: {
        updateUserDetails(state, action) {
            state.data = action.payload;
        }
    }
});

export const userDetailActions = userDetailSlice.actions;
export const userDetailReducer = userDetailSlice.reducer;
