import React, { useState } from 'react';
import { useAuth } from './Auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS file for styling
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3003/auth/signin', {
                email,
                password
            });

            const token = res.data.token;
            window.localStorage.setItem('token', token);
            auth.login(res.data.user);
            navigate('/bookingpage');
        } catch (err) {
            setErrorMessage('Invalid email or password');
            console.error(err);
        }
    };

    return (
        <>
            <Navbar />
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type='submit'>Login</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </div>
            <Footer />
        </>
    );
}
