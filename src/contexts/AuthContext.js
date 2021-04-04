import React, { useContext, useEffect, useState } from 'react';
import Auth from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider= ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return Auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return Auth.signInWithEmailAndPassword(email, password);
    }

    const value = {
        currentUser,
        signup,
        login
    }

    useEffect(() => {
        const unsubscribe = Auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )

}