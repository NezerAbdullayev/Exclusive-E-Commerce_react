import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useSignInMutation } from '../services/userApi'; 
import { useDispatch } from 'react-redux';
import {  setBasket } from '../Redux/Slice/BasketSlice'; 
import { setAdmin, setUser } from '../Redux/Slice/UserSlice';
import toast from 'react-hot-toast';

import Spinner from '../ui/Spinner';


function SignIn() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [signIn, {isLoading}] = useSignInMutation();
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (email && password) {
            try {
                const {user="",basket=[],isAdmin} = await signIn({ email, password }).unwrap();

                //giris eden admindirse admin panele yonlendirmek ucun
                if(isAdmin){
                    dispatch(setAdmin(user.uid));
                    return
                }

                //user ve basketin state-e elave edilmesi
                dispatch(setUser({ uid: user.uid, email: user.email, name: user.displayName,password }));
                dispatch(setBasket({ basket }));
            } catch (err) {
                toast.error('İstifadəci məlumatları və ya parol yanlışdır');
            }
        }
        else  toast.error("Zəhmət olmasa məlumatlarınız doğru şəkildə daxil edin.")

        setFormData({ email: '', password: '' });
    };


    
    if (isLoading) return <Spinner />;


    return (
        <div className="w-full">
            <div className="mb-12">
                <h3 className="mb-6 text-4xl">Log in to Exclusive</h3>
                <p>Enter your details below</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Input
                        type="email"
                        classname="auth"
                        name="email"
                        placeholder="Email or Phone Number"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type="password"
                        classname="auth"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-wrap items-center justify-between">
                    <Button>Login</Button>
                    <Link className="text-main">Forgot Password?</Link>
                </div>

                <div className="mt-4">
                    don't have an account?{' '}
                    <Link to="/auth/signup" className="border-b border-stone-700">
                        create account
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
