// Authentication API functions
const BASE_URL = "https://cane-crew-server-devops65.replit.app";

// Type definitions
export interface SignupData {
  first_name: string;
  last_name?: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  email: string;
}

export interface UserProfile {
  customer_id: string;
  first_name: string;
  last_name?: string;
  email: string;
  created_at: string;
  is_email_verified: boolean;
}

// API functions
export const signUp = async (data: SignupData): Promise<string> => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`${response.status}: ${errorText}`);
    error.name = response.status.toString();
    throw error;
  }

  const message = await response.text();
  return message;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`${response.status}: ${errorText}`);
    error.name = response.status.toString();
    throw error;
  }

  return response.json();
};

export const getCurrentUser = async (token: string): Promise<UserProfile> => {
  const response = await fetch(`${BASE_URL}/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`${response.status}: ${errorText}`);
    error.name = response.status.toString();
    throw error;
  }

  return response.json();
};

// Token management
export const saveToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('authToken');
};

export const removeToken = (): void => {
  localStorage.removeItem('authToken');
}; 