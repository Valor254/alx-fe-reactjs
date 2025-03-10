import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                value="{username}" 
                onChange={handleChange} 
                placeholder="Username" 
            />
            <input 
                type="email" 
                name="email" 
                value="{email}" 
                onChange={handleChange} 
                placeholder="Email" 
            />
            <input 
                type="password" 
                name="password" 
                value="{password}"
                onChange={handleChange} 
                placeholder="Password" 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
