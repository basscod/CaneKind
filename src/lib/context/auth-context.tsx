"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  login, 
  signUp, 
  getCurrentUser, 
  saveToken, 
  getToken, 
  removeToken,
  UserProfile,
  LoginData,
  SignupData 
} from '../api/auth';

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (data: LoginData) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on initial load
    const savedToken = getToken();
    if (savedToken) {
      setToken(savedToken);
      fetchUserData(savedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchUserData = async (authToken: string) => {
    try {
      setIsLoading(true);
      const userData = await getCurrentUser(authToken);
      setUser(userData);
      setError(null);
    } catch (err: any) {
      console.error('Failed to fetch user data:', err);
      setError('Session expired. Please login again.');
      handleLogout();
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (data: LoginData) => {
    try {
      setIsLoading(true);
      const response = await login(data);
      saveToken(response.token);
      setToken(response.token);
      await fetchUserData(response.token);
      router.push('/');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login. Please check your credentials.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (data: SignupData) => {
    try {
      setIsLoading(true);
      await signUp(data);
      setError(null);
      // Navigate to login page or automatically log the user in
      router.push('/auth');
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to create account. Please try again.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    removeToken();
    router.push('/');
  };

  const fetchUser = async () => {
    if (token) {
      await fetchUserData(token);
    }
  };

  const value = {
    user,
    token,
    isLoading,
    error,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
    fetchUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 