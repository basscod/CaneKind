import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/cart-context";
import { AuthProvider } from "@/lib/context/auth-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "CaneKind | Premium Sugarcane Juice in the UK",
  description: "Experience natural sweetness with CaneKind's premium sugarcane juice. Fresh, organic, and delicious.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
