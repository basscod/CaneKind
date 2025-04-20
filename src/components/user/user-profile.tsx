"use client";

import React from 'react';
import { useAuth } from '@/lib/context/auth-context';
import { Button } from '@/components/ui/button';

export const UserProfile: React.FC = () => {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return <div className="p-4 text-center">Loading profile...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-gray-500 text-sm">Name</h3>
          <p className="font-medium">
            {user.first_name} {user.last_name || ''}
          </p>
        </div>
        
        <div>
          <h3 className="text-gray-500 text-sm">Email</h3>
          <p className="font-medium">{user.email}</p>
          {!user.is_email_verified && (
            <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded">
              Not verified
            </span>
          )}
        </div>
        
        <div>
          <h3 className="text-gray-500 text-sm">Customer ID</h3>
          <p className="font-medium">{user.customer_id}</p>
        </div>
        
        <div>
          <h3 className="text-gray-500 text-sm">Member Since</h3>
          <p className="font-medium">
            {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
        
        <div className="pt-4">
          <Button 
            variant="outline" 
            className="text-red-500 border-red-500 hover:bg-red-50"
            onClick={logout}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}; 