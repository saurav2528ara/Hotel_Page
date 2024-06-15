import React, { useState } from 'react';
import '../styles/Sign-up.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-up logic here. For now, we'll simulate a successful sign-up.
        if (password === confirmPassword) {
            setError('');
            // Redirect to home page after successful sign-up
            navigate('/');
        } else {
            setError('Passwords do not match');
        }
    };

    return (
        <section className="sign-up">
            <div className="sign-up-container">
                <h2>Sign Up</h2>
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
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Sign Up</button>
                </form>
                <button className="back-button" onClick={() => navigate('/login')}>Back to Login</button>
            </div>
        </section>
    );
};

export default SignUp;
