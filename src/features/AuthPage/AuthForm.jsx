import { useState } from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

function AuthForm({ title, Inputs = [], onSubmit,toggleForm }) {
    const [formValues, setFormValues] = useState(
        Inputs.reduce((acc, input) => {
            acc[input.name] = '';
            return acc;
        }, {})
    );

    console.log(formValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);

        setFormValues(
            Inputs.reduce((acc, input) => {
                acc[input.name] = '';
                return acc;
            }, {})
        );
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`font-Inter `}
            onChange={handleChange}
        >
            <div className={`${toggleForm==="register" ? "mb-12" : " "}`}>
                <h3 className="mb-6 text-4xl  ">{title}</h3>
                <p>Enter your details below</p>
            </div>

            <div className="mb-3">
                {Inputs.map((input) => (
                    <Input
                        classname="auth"
                        key={input.id}
                        placeholder={input.placeholder}
                        value={formValues[input.name]}
                        onChange={handleChange}
                        name={input.name}
                    />
                ))}
            </div>

            <Button type="form">
                {toggleForm === 'login' ? 'Log In' : 'Create Account'}
            </Button>
        </form>
    );
}

export default AuthForm;
