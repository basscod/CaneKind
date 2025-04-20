// Authentication API functions
const BASE_URL = "https://cane-crew-server-devops65.replit.app";

// Flag to enable/disable demo mode for testing/development
const ENABLE_DEMO_MODE = true; // Set to true for fallback mode

// Demo user for testing when server is down
const DEMO_USER: UserProfile = {
  customer_id: "demo123",
  first_name: "Demo",
  last_name: "User",
  email: "demo@example.com",
  created_at: new Date().toISOString(),
  is_email_verified: true
};

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
  console.log('Signup API call with data:', data);
  
  // Demo mode for testing when server is down
  if (ENABLE_DEMO_MODE) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if the email contains "error" to simulate errors
    if (data.email.includes("error")) {
      const error = new Error("409: Email already exists");
      error.name = "409";
      throw error;
    }
    
    console.log('Demo mode: Signup successful');
    return "Account created successfully for " + data.email;
  }
  
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      credentials: 'omit',
      body: JSON.stringify(data),
    });

    console.log('Signup response status:', response.status);
    
    let responseText;
    try {
      responseText = await response.text();
      console.log('Signup response text:', responseText);
    } catch (textError) {
      console.error('Error reading response text:', textError);
      responseText = 'Could not read response text';
    }

    if (!response.ok) {
      const error = new Error(`${response.status}: ${responseText}`);
      error.name = response.status.toString();
      throw error;
    }

    return responseText;
  } catch (error) {
    console.error('Signup fetch error:', error);
    throw error;
  }
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  console.log('Login API call with data:', { email: data.email });
  
  // Demo mode for testing when server is down
  if (ENABLE_DEMO_MODE) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check for special test email to simulate errors
    if (data.email.includes("error")) {
      const error = new Error("401: Invalid credentials");
      error.name = "401";
      throw error;
    }
    
    // Demo successful login
    console.log('Demo mode: Login successful');
    return {
      token: "demo-jwt-token-" + Date.now(),
      email: data.email
    };
  }
  
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      credentials: 'omit',
      body: JSON.stringify(data),
    });

    console.log('Login response status:', response.status);
    
    if (!response.ok) {
      let errorText;
      try {
        errorText = await response.text();
        console.log('Login error response:', errorText);
      } catch (textError) {
        console.error('Error reading response text:', textError);
        errorText = 'Could not read response text';
      }
      
      const error = new Error(`${response.status}: ${errorText}`);
      error.name = response.status.toString();
      throw error;
    }

    const responseData = await response.json();
    console.log('Login successful for:', responseData.email);
    return responseData;
  } catch (error) {
    console.error('Login fetch error:', error);
    throw error;
  }
};

export const getCurrentUser = async (token: string): Promise<UserProfile> => {
  // Demo mode for testing when server is down
  if (ENABLE_DEMO_MODE && token.startsWith("demo-jwt-token")) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log('Demo mode: Get user successful');
    return DEMO_USER;
  }
  
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      },
      credentials: 'omit',
    });

    if (!response.ok) {
      const errorText = await response.text();
      const error = new Error(`${response.status}: ${errorText}`);
      error.name = response.status.toString();
      throw error;
    }

    return response.json();
  } catch (error) {
    console.error('Get user data fetch error:', error);
    throw error;
  }
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