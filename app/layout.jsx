import localFont from "next/font/local";
import { Karla } from "next/font/google";
import Navbar from "./(components)/nav/Navbar";
import "./globals.css";

// ✅ Local font
const fitzgerald = localFont({
  src: "./fonts/fitzgerald.ttf",
  variable: "--font-fitzgerald",
  display: "swap",
});

// ✅ Google font
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fitzgerald.variable} ${karla.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
