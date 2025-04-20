"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';
import Link from 'next/link';

// Mock order data - would be fetched from API in a real implementation
const mockOrders = [
  {
    id: 'ORD-12345',
    date: '2023-12-15T10:30:00Z',
    status: 'Delivered',
    total: 34.99,
    items: [
      { 
        name: 'Premium Sugarcane Juice (6-pack)', 
        quantity: 1,
        price: 29.99 
      },
      { 
        name: 'Shipping', 
        quantity: 1,
        price: 5.00 
      }
    ]
  },
  {
    id: 'ORD-12344',
    date: '2023-11-01T14:20:00Z',
    status: 'Delivered',
    total: 64.99,
    items: [
      { 
        name: 'Premium Sugarcane Juice (12-pack)', 
        quantity: 1,
        price: 59.99 
      },
      { 
        name: 'Shipping', 
        quantity: 1,
        price: 5.00 
      }
    ]
  }
];

export default function OrdersPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState(mockOrders);
  const [isOrdersLoading, setIsOrdersLoading] = useState(false);

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  // In a real implementation, this would fetch orders from an API
  useEffect(() => {
    if (user) {
      setIsOrdersLoading(true);
      // Simulate API call
      setTimeout(() => {
        setOrders(mockOrders);
        setIsOrdersLoading(false);
      }, 800);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-20 mt-16">
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
    <div className="container mx-auto max-w-5xl px-4 py-20 mt-16">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary">Your Orders</h1>
          <Link 
            href="/profile" 
            className="text-sugarcane-yellow hover:underline"
          >
            Back to Profile
          </Link>
        </div>
        
        {isOrdersLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sugarcane-yellow"></div>
          </div>
        ) : orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div 
                key={order.id} 
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-sugarcane-yellow/30 transition-all"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-sugarcane-yellow">{order.id}</h3>
                    <p className="text-sm text-gray-500">{formatDate(order.date)}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                        'bg-amber-100 text-amber-800'}`}>
                      {order.status}
                    </span>
                    <p className="text-lg font-semibold mt-1">${order.total.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Order Items</h4>
                  <ul className="space-y-2">
                    {order.items.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-text-primary">
                          {item.quantity} × {item.name}
                        </span>
                        <span className="text-text-primary">${item.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 text-right">
                  <Link 
                    href={`/orders/${order.id}`}
                    className="text-sm text-sugarcane-yellow hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg 
              className="mx-auto h-16 w-16 text-gray-400 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
              />
            </svg>
            <h3 className="text-lg font-medium text-text-primary mb-2">No orders yet</h3>
            <p className="text-gray-500 mb-6">You haven't placed any orders with us yet.</p>
            <Link 
              href="/products" 
              className="px-6 py-2 bg-sugarcane-yellow text-black rounded-full hover:bg-sugarcane-yellow/80 transition-colors inline-block"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 