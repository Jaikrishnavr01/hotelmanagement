import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Signup.css'; 
import Footer from '../Footer/Footer';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3003/auth/signup', {
            name,
            email,
            password
        })
        .then(res => {
            console.log(res);
            navigate('/login');
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <>
                <Navbar/> <br /> <br /> <br />
        <div className="signup-container">
    
            <div className="signup-form">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
                <p>I already have an account? <Link to='/login'>login</Link></p>
            </div>
        </div>
        <br /><br /><br />
        <Footer/>
        </>
    );
}
