import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const basketApi = createApi({
    reducerPath: 'basketApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Basket'],
    endpoints: (builders) => ({
        getUserBasket: builders.query({
            queryFn: async ({ userId }) => {
                try {
                    const basketRef = collection(db, `users/${userId}/basket`);
                    const querySnapshot = await getDocs(basketRef);
                    let basketData = [];
                    querySnapshot?.docs.forEach((doc) => {
                        basketData.push({
                            productId: doc.id,
                            ...doc.data(),
                        });
                    });
                    return { data: basketData };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            providesTags: ['Basket'],
            staleTime: 300000,
        }),

        addProductToBasket: builders.mutation({
            queryFn: async ({ userId, newProduct }) => {
                console.log(userId, newProduct,"added");
                try {
                    const docRef = await addDoc(
                        collection(db, 'users', userId, 'basket'),
                        { ...newProduct, timestamp: serverTimestamp() }
                    );
                    return { data: { productId: docRef.id, ...newProduct } };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            invalidatesTags: ['Basket'],
        }),

        deleteProduct: builders.mutation({
            queryFn: async ({ userId, deleteProductId }) => {
                console.log(userId, deleteProductId);
                try {
                    const docRef = doc(
                        db,
                        'users',
                        userId,
                        'basket',
                        deleteProductId
                    );
                    await deleteDoc(docRef);
                    return { data: 'ok' };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            invalidatesTags: ['Basket'],
        }),

        updateProduct: builders.mutation({
            queryFn: async ({ userId, updateProductId, updateProductDate }) => {
                console.log(userId, updateProductId, updateProductDate,"up");
                try {
                    await updateDoc(
                        doc(db, 'users', userId, 'basket', updateProductId),
                        {
                            ...updateProductDate,
                            timestamp: serverTimestamp(),
                        }
                    );
                    return { data: 'ok' };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            invalidatesTags: ['Basket'],
        }),
    }),
});

export const {
    useAddProductToBasketMutation,
    useLazyGetUserBasketQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = basketApi;

export default basketApi;
