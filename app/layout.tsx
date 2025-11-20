import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/layout/Footer";
import AOSWrapper from "./components/features/AOSWrapper";
import "aos/dist/aos.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Family Clinic",
  description:
    "Welcome to Family Clinic your trusted partner in health and wellness",
  authors: [{ name: "Family Clinic", url: "https://familyclinic.com" }],
  keywords: ["Family Clinic", "Healthcare", "Telemedicine"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
      <body className={`${poppins.variable}  `}>
        <AOSWrapper />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
