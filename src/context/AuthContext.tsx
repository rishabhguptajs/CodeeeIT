'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { auth, authWithGoogle } from '../services/firebase';
import { User } from 'firebase/auth';

interface AuthContextProps {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        if (user) {
          router.push('/dashboard');
        }
      });
      return () => unsubscribe();
    }
  }, [router]);

  const signInWithGoogle = async () => {
    try {
      const user = await authWithGoogle();
      setUser(user);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
