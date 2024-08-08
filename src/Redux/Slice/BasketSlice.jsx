import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasket: (state, action) => {
            state.basket = action.payload ?  action.payload : [];
        },
        addInBasket: (state, action) => {
            console.log(action.payload)
            state.basket.push(action.payload);
        },
        deleteBasketItem: (state, action) => {
            state.basket = state.basket.filter(
                (product) => product.productId !== action.payload
            );
        },
        updateBasketItem: (state, action) => {
            state.basket = state.basket.map((product) => {
                if (product.id === action.payload.id) return action.payload;
                return product;
            });
        },
        resetBasket: (state) => {
            state.basket = [];
        },
    },
});

export const {
    setBasket,
    resetBasket,
    addInBasket,
    deleteBasketItem,
    updateBasketItem,
} = basketSlice.actions;
export default basketSlice.reducer;
