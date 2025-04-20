"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageLayout } from '@/components/layout/page-layout';
import { UserProfile } from '@/components/user/user-profile';
import { useAuth } from '@/lib/context/auth-context';

export default function ProfilePage() {
  const { user, token, isLoading } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && (!user || !token)) {
      router.push('/auth');
    }
  }, [user, token, isLoading, router]);

  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sugarcane-green mx-auto"></div>
            <p className="mt-4 text-text-secondary">Loading your profile...</p>
          </div>
        ) : user ? (
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <UserProfile />
            </div>
            
            <div className="md:col-span-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => router.push('/orders')}
                      className="text-sugarcane-green hover:underline w-full text-left"
                    >
                      Order History
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => router.push('/subscriptions')}
                      className="text-sugarcane-green hover:underline w-full text-left"
                    >
                      My Subscriptions
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => router.push('/addresses')}
                      className="text-sugarcane-green hover:underline w-full text-left"
                    >
                      Saved Addresses
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => router.push('/payment-methods')}
                      className="text-sugarcane-green hover:underline w-full text-left"
                    >
                      Payment Methods
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p>You need to be logged in to view this page.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
} 