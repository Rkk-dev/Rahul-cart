import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: 'wishlist',
    initialState:{
        items: [],
        totalNumberOfItems : 0,
    },
    reducers: {
        addToWishlist(state, action) {
            const newWish = action.payload;
            const doWeHaveThisWish = state.items.find((wish) => wish.id === newWish.id);
            if(!doWeHaveThisWish) {
                state.totalNumberOfItems++;
                state.items.push(newWish);
            }
        },
        removeFromWishlist(state, action) {
            const newWishId = action.payload;
            const newWishes = state.items.filter((wish) => wish.id !== newWishId);
            state.items = newWishes;
            state.totalNumberOfItems--;
        }
    }
});

export const wishActions = wishSlice.actions;
export const wishReducer = wishSlice.reducer;