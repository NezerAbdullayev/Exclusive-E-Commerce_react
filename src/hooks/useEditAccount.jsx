import { useState } from 'react';
import { useSelector } from 'react-redux';

function useEditAccount(name, email ) {
    const {name:kurrentName,email:kurrentEmail}=useSelector(state=>state.user)

    
    const [editUserDate, setEditUserDate] = useState({
        name,
        email,
        password: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    

    const handleChande=(e)=>{
        const {name,value}=e.target;
        setEditUserDate(editUser=>({...editUser,[name]:value}))
    }

    const reset=()=>{
        setEditUserDate({
            name:kurrentName,
            email:kurrentEmail,
            password: '',
            newPassword: '',
            confirmNewPassword: '',
        })
    }

    return [editUserDate,handleChande,reset]
}

export default useEditAccount;
