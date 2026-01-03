import type { Metadata } from "next";
import { Sriracha, Stylish } from "next/font/google";
import "@/app/globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const sriracha = Sriracha({
  weight: "400",
  variable: "--font-sriracha",
});

const stylish = Stylish({
  weight: "400",
  variable: "--font-stylish",
});

export const metadata: Metadata = {
  title: "Vandy's Personal Website",
  description: "This is Vandy's Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sriracha.variable} ${stylish.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
