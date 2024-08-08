import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    collection,
    addDoc,
    updateDoc,
    getDocs,
    deleteDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        
        //get All product
        getProductsDate: builder.query({
            queryFn: async () => {
                try {
                    const productRef = collection(db, 'products');
                    const querySnapshot = await getDocs(productRef);
                    let productDate = [];
                    querySnapshot?.docs.forEach((doc) => {
                        productDate.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    return { data: productDate };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            providesTags: ['Products'],
            staleTime: 300000,
        }),



        addProduct: builder.mutation({
            queryFn: async (productData) => {
                try {
                    const docRef = await addDoc(
                        collection(db, 'products'),
                       {...productData,timestamp:serverTimestamp()}
                    );
                    return { data: { id: docRef.id, ...productData } };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            invalidatesTags: ['Products'],
        }),



        updateProduct: builder.mutation({
            queryFn: async ({ id, productData }) => {
                try {
                    await updateDoc(doc(db, 'products', id), {
                        ...productData,
                        timestamp: serverTimestamp(),
                    });
                    return { data: 'ok' };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            invalidatesTags: ['Products'],
        }),


        
        deteleProduct: builder.mutation({
            queryFn: async (deleteProductId) => {
                try {
                    await deleteDoc(db, 'products', deleteProductId);
                    return { data: 'ok' };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
            invalidatesTags: ['Products'],
        }),

        
    }),
});

export const {
    useGetProductsDateQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeteleProductMutation,
} = productApi;

export default productApi;
