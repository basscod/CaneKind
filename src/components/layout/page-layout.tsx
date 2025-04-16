import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}; 