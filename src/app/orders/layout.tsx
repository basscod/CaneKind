import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Orders | CaneKind',
  description: 'View your order history and track your CaneKind purchases.',
};

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-amber-50/30 min-h-screen">
      {children}
    </main>
  );
} 