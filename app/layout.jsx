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

// ✅ Local font
const fitzgeraldBold = localFont({
  src: "./fonts/fitzgeraldBold.ttf",
  variable: "--font-fitzgerald-bold",
  display: "swap",
});

// ✅ Google font
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fitzgerald.variable} ${karla.variable} ${fitzgeraldBold.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
