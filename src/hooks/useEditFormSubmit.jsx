import { useSelector } from 'react-redux';
import {
    useUpdateUserAndPasswordMutation,
    useUpdateUserMutation,
} from '../services/userApi';
import { useCallback, useState } from 'react';

const useEditFormSubmit = () => {
    const [updateUser] = useUpdateUserMutation();
    const [updateUserAndPassword] = useUpdateUserAndPasswordMutation();
    const userPassword = useSelector((state) => state.user.password);

    const [error, setError] = useState('');

    const editFormSubmit = useCallback(
        async (name, email, password, newPassword, confirmNewPassword) => {
            try {
                if (!password && !newPassword && !confirmNewPassword) {
                    const res = await updateUser({ name, email });
                    if (res.data.length > 0) setError('');

                } else if (
                    password &&
                    newPassword &&
                    confirmNewPassword &&
                    newPassword == confirmNewPassword &&
                    userPassword &&
                    password
                ) {
                    const res=await updateUserAndPassword({
                        name,
                        email,
                        password: newPassword,
                    });
                    if(res.data.length > 0) setError("")
                    
                } else setError('Invalid user credentials');
            } catch (error) {
                setError(error.message);
            }
        },
        [updateUser, updateUserAndPassword, userPassword]
    );

    return { editFormSubmit, error };
};

export default useEditFormSubmit;
