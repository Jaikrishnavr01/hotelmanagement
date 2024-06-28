import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export default function Auth(props) {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const storedUser = window.localStorage.getItem('user');
        if(storedUser){
            setUser(JSON.stringify(storedUser));
            console.log(JSON.stringify(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        window.localStorage.setItem('user', JSON.stringify(userData));
        
    };

    const logout = () => {
        setUser(null);
        window.localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
