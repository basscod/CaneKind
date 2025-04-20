"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-20 mt-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sugarcane-yellow"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20 mt-16">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold mb-8 text-text-primary">Your Profile</h1>
        
        {/* Profile Information */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-sugarcane-yellow">Account Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg text-text-primary">{user.first_name} {user.last_name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg text-text-primary">{user.email}</p>
              {!user.is_email_verified && (
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                  Not verified
                </span>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-lg text-text-primary">{formatDate(user.created_at)}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link 
            href="/orders" 
            className="px-6 py-2 bg-sugarcane-yellow text-black rounded-full hover:bg-sugarcane-yellow/80 transition-colors"
          >
            View Your Orders
          </Link>
          <Link 
            href="/profile/edit" 
            className="px-6 py-2 border border-sugarcane-yellow text-sugarcane-yellow rounded-full hover:bg-sugarcane-yellow/10 transition-colors"
          >
            Edit Profile
          </Link>
          <Link 
            href="/profile/change-password" 
            className="px-6 py-2 border border-gray-300 text-text-primary rounded-full hover:bg-white/10 transition-colors"
          >
            Change Password
          </Link>
        </div>

        {/* Subscription Information (if applicable) */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-sugarcane-yellow">Subscription</h2>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <p className="text-text-primary mb-4">
              You don't have an active subscription yet.
            </p>
            <Link 
              href="/subscription" 
              className="px-6 py-2 bg-sugarcane-yellow text-black rounded-full hover:bg-sugarcane-yellow/80 transition-colors inline-block"
            >
              Explore Subscriptions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 