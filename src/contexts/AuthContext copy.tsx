import React, { useContext, useEffect, useState } from 'react';
import Auth from '../firebase';

interface AuthProps {
    currentUser: any,
    login: (email: string, password: string) => any,
    signup: (email: string, password: string) => any
}

const AuthContext = React.createContext<AuthProps>({
    currentUser: null,
    login: () => { },
    signup: () => { }
});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any | null>();
    const [loading, setLoading] = useState(true);

    const signup = (email: string, password: string) => {
        return Auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email: string, password: string) => {
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
        <AuthContext.Provider value={{ currentUser: currentUser, login: login, signup: signup }} >
            {children}
        </AuthContext.Provider>
    )

}