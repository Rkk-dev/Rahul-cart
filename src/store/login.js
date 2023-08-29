import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isUserLogin : false
    },
    reducers: {
        logIn(state) {
            state.isUserLogin = true;
        },
        logOut(state) {
            state.isUserLogin = false;
        }
    }
});

export const loginAction = loginSlice.actions;
export const loginReducer = loginSlice.reducer;