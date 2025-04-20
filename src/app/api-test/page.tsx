"use client";

import React, { useState, useEffect } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';

export default function ApiTestPage() {
  const [apiStatus, setApiStatus] = useState<string>('Checking...');
  const [signupTest, setSignupTest] = useState<string>('Not tested');
  const [loginTest, setLoginTest] = useState<string>('Not tested');
  const [loading, setLoading] = useState<boolean>(false);
  
  const baseUrl = 'https://cane-crew-server-devops65.replit.app';
  
  // Test API connection
  useEffect(() => {
    checkApiStatus();
  }, []);
  
  const checkApiStatus = async () => {
    setApiStatus('Checking...');
    try {
      const response = await fetch(baseUrl, { mode: 'cors' });
      const status = response.status;
      setApiStatus(`Connected (Status: ${status})`);
    } catch (error) {
      console.error('API status check failed:', error);
      setApiStatus(`Failed to connect: ${error instanceof Error ? error.message : String(error)}`);
    }
  };
  
  const testSignup = async () => {
    setLoading(true);
    setSignupTest('Testing...');
    try {
      const response = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: 'Test',
          last_name: 'User',
          email: `test${Date.now()}@example.com`,
          password: 'Password123'
        }),
      });
      
      const responseText = await response.text();
      setSignupTest(`Status: ${response.status}, Response: ${responseText}`);
    } catch (error) {
      console.error('Signup test failed:', error);
      setSignupTest(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };
  
  const testLogin = async () => {
    setLoading(true);
    setLoginTest('Testing...');
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'admin@canekind.com',
          password: 'admin123'
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setLoginTest(`Success! Token received for: ${data.email}`);
      } else {
        const errorText = await response.text();
        setLoginTest(`Failed! Status: ${response.status}, Error: ${errorText}`);
      }
    } catch (error) {
      console.error('Login test failed:', error);
      setLoginTest(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">API Connection Test</h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">API Server Status</h2>
            <div className="flex items-center justify-between">
              <div className={`text-lg ${apiStatus.includes('Connected') ? 'text-green-600' : 'text-red-600'}`}>
                {apiStatus}
              </div>
              <Button onClick={checkApiStatus} disabled={loading}>
                Recheck
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Test Signup Endpoint</h2>
            <div className="mb-4">
              <p className="text-gray-600">This will attempt to create a test user account.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-700">{signupTest}</div>
              <Button onClick={testSignup} disabled={loading}>
                Test Signup
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Test Login Endpoint</h2>
            <div className="mb-4">
              <p className="text-gray-600">This will attempt to log in with admin credentials.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-700">{loginTest}</div>
              <Button onClick={testLogin} disabled={loading}>
                Test Login
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>If all tests fail, the API server might be down or unreachable.</li>
              <li>If you see CORS errors, there might be cross-origin issues to resolve.</li>
              <li>Check browser console for detailed error messages.</li>
              <li>Ensure you're using the correct API endpoint URLs.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 