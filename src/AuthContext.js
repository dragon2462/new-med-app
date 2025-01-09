import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (newUser) => {
    // Here you would typically send a request to your backend to create a new user
    setUser(newUser);
  };

  const login = (userData) => {
    // Here you would typically send a request to your backend to authenticate the user
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};