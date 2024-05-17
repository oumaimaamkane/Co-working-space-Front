import React, { useState } from 'react';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="container">
            <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
                {isSignUp ? (
                    <SignUpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                ) : (
                    <SignInForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                )}
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={() => setIsSignUp(false)}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SignUpForm = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        {/* Add other form fields */}
        <button type="submit">Sign Up</button>
    </form>
);

const SignInForm = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <span>or use your account</span>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        {/* Add other form fields */}
        <button type="submit">Sign In</button>
    </form>
);

export default AuthPage;
