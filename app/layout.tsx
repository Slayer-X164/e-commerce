import type { Metadata } from "next";
import { Fira_Mono, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/ToastProvider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight:["400","500","700"],

});

export const metadata: Metadata = {
  title: "Watchz | e-commerce",
  description: "a modern e-commmerce platform for watches ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <ToastProvider/>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
