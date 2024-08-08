import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useState } from 'react';
import { useSignUpMutation } from '../services/userApi';
import toast from 'react-hot-toast';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [signUp, { isLoading}] = useSignUpMutation();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        if (name && email && password) {
            try {
                await signUp({ email, password, name }).unwrap();
                toast.success("Uğurla qeydiyyatdan keçdiz")
            } catch (err) {
                toast.error("Daxil etdiyiniz email artıq sistemdə mövcuddur")
            }
        } else {
            toast.error('Zəhmət olmasa bütün xanaları doldurun.');
        }

        //reset  value
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    if (isLoading) return <div>loading...</div>;

    return (
        <div className="w-full">
            <div className="mb-12">
                <h3 className="mb-6 text-4xl">Create an account</h3>
                <p>Enter your details below</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Input
                        classname="auth"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
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

                <div className="flex items-center justify-between">
                    <Button className="w-full">Create Account </Button>
                </div>

                <Link
                    to="/auth/signIn"
                    className="mt-4 inline-block border-b border-stone-700"
                >
                    Already have account?
                </Link>

            </form>
        </div>
    );
}

export default SignUp;
