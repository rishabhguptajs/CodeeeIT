"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from '../utils/axiosInstance';
import Router from "next/router";

interface AuthContextType {
  user: any;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
      Router.push('/dashboard');
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await axios.post('/auth/login', { email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.token);
      Router.push('/dashboard');
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      const { data } = await axios.post('/auth/register', { name, email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.token);
      Router.push('/dashboard');
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    Router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
