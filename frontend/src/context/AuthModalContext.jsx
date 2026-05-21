import React from 'react'
import { createContext, useContext, useState } from 'react'

const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(true);

    const openAuthModal = () => {
        alert("open auth modal");
        setIsAuthModalOpen(true);
    }

    const closeAuthModal = () => {
        alert("close auth");
        setIsAuthModalOpen(false);
    }

    return (

        <AuthModalContext.Provider value={{ isAuthModalOpen, openAuthModal, closeAuthModal }}>
            {children}
        </AuthModalContext.Provider>
    )
}

export const useAuthModal = () => useContext(AuthModalContext);
