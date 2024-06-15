import React, { useState } from 'react';
import '../styles/Log-in.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add authentication logic here. For now, we'll just simulate a successful login.
        if (email === 'user@example.com' && password === 'password') {
            setError('');
            // Redirect to home page after successful login
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    const handleSignUp = () => {
        // Navigate to the sign-up page
        navigate('/sign-up');
    };

    return (
        <section className="log-in">
            <div className="login-container">
                <h1>Welcome to OOAK</h1>
                <h3>Please Enter your details in the form below</h3>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="pass">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
                <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>
            </div>
        </section>
    );
};

export default Login;
