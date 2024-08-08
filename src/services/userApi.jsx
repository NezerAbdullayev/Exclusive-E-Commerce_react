import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // updateEmail,
    updatePassword,
    updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        signIn: builder.mutation({
            queryFn: async ({ email, password }) => {
                try {
                    const { user } = await signInWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );
                    console.log(user);

                    //giris edenin admin ve ya user oldugunu yoxlayiriq
                    const adminRef = doc(db, 'users', user.uid);
                    const adminSnapshot = await getDoc(adminRef);
                    const isAdmin = adminSnapshot.exists()
                        ? adminSnapshot.data().isAdmin
                        : false;

                    //user meulamatlarinin cekilmesi
                    const basketRef = doc(
                        db,
                        'users',
                        user.uid,
                    );

                    const basketSnapshot = await getDoc(basketRef);
                    const basketData = basketSnapshot.exists()
                        ? basketSnapshot.data().items
                        : [];

                    //egerki admin daxil olursa
                    if (isAdmin) {
                        return { data: { isAdmin, user } };
                    }

                    return { data: { user, basket: basketData } };
                } catch (error) {
                    return { error: { message: 'salue' } };
                }
            },
        }),
        signUp: builder.mutation({
            queryFn: async ({ email, password, name }) => {
                try {
                    const { user } = await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );
                    await updateProfile(user, { displayName: name });
                    // const basketRef = doc(db, 'users', user.uid, 'basket');
                    // await setDoc(basketRef,{});
                    return { data: user };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            },
        }),
        deleteUserAccount: builder.mutation({
            queryFn: async ({ DelteUserID }) => {},
        }),
        updateUser: builder.mutation({
            queryFn: async ({ name, email }) => {
                const user = auth.currentUser;
                if (user) {
                    try {
                        // await updateEmail(user,email)
                        await updateProfile(user, { displayName: name });
                        return { data: { email, name } };
                    } catch (error) {
                        return { error: error.message };
                    }
                }
                return { error: 'No user is logged in' };
            },
        }),
        updateUserAndPassword: builder.mutation({
            queryFn: async ({ email, name, password }) => {
                const user = auth.currentUser;
                if (user) {
                    try {
                        //email deyismek ucun Verification lazimdir, emaile gene mesaja girerek deyismek . ona gore bagladim o funksiyani
                        // await updateEmail(user,email)
                        await updateProfile(user, { displayName: name });
                        await updatePassword(user, password);
                        return { data: { email, name, password } };
                    } catch (error) {
                        return { error: error.message };
                    }
                }
                return { error: 'No user is logged in' };
            },
        }),
    }),
});

export const {
    useSignInMutation,
    useSignUpMutation,
    useUpdateUserAndPasswordMutation,
    useUpdateUserMutation,
} = authApi;
export default authApi;
