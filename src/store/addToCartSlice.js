import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
    name: 'add to cart',
    initialState: {
        itemsInCart: [],
        totalNumberOfItems: 0
    },
    reducers: {
        clearCart(state, action) {
            state.itemsInCart = [];
            state.totalNumberOfItems = 0;
        },
        updateCart(state,action) {
            state.totalNumberOfItems = action.payload.totalNumberOfItems;
            state.itemsInCart = action.payload.itemsInCart;
        },
        addItem(state, action) {
            const itemToBeAdded = action.payload;
            const isItemAlreadyExit = state.itemsInCart.find(item => item.id === itemToBeAdded.id);
            if (isItemAlreadyExit) {
                isItemAlreadyExit.quantity++;
            } else {
                state.totalNumberOfItems++;
                state.itemsInCart.push(itemToBeAdded);
            }
        },
        removeItem(state, action) {
            const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload);
            console.log(itemIndex);
            if(state.itemsInCart[itemIndex].quantity === 1 ){
                state.totalNumberOfItems--;
                state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload);
            }else {
                state.itemsInCart[itemIndex].quantity--;
            }
        }
    }
});

export const addToCartActions = addToCartSlice.actions;
export const addToCartReducer = addToCartSlice.reducer;