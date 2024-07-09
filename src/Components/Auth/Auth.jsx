import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = window.localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse storedUser from JSON
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        window.localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext); // Use React.useContext to access context
};
