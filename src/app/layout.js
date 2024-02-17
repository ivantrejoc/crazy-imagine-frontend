import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Clone",
  description: "Ivan Trejo Crazy Imagine Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <NavBar />
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}
