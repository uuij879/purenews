import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './component/Nav';  // Ensure Nav component is valid
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "purenews",
  description: "Read latest news in only 50 words and know about world",
};

export default function RootLayout({ children }) {
  return (


    <html lang="en">
      <body>
    
        {children}
      </body>
    </html>
  
  );
}
