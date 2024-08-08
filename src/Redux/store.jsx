import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';


import productsReducer from "./Slice/ProductsSlice"
import basketReducer from './Slice/BasketSlice';
import userReducer from "./Slice/UserSlice"

import authApi from '../services/userApi';
import basketApi from '../services/basketApi';
import productApi from "../services/productApi"

const store = configureStore({
    reducer: {
        user: userReducer,
        basket:basketReducer,
        product:productsReducer,
        [authApi.reducerPath]: authApi.reducer,
        [basketApi.reducerPath]:basketApi.reducer,
        [productApi.reducerPath]:productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(authApi.middleware,basketApi.middleware,productApi.middleware),
});

setupListeners(store.dispatch);

export { store };
