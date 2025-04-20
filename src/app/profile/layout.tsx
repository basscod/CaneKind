import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Profile | CaneKind',
  description: 'View and manage your CaneKind account, orders, and preferences.',
};

export default function ProfileLayout({
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