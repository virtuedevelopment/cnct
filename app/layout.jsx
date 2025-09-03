import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Navbar from "./(components)/nav/Navbar";
import Footer from "./(components)/nav/Footer";
import { initStoryblok } from "@/_data/storyblok";
import "./globals.css";

initStoryblok();

//✅ Local font
// const raindrop = localFont({
//   src: "./fonts/raindrop.otf",
//   variable: "--font-raindrop",
//   display: "swap",
// });

//✅ Local font
const kugile = localFont({
  src: "./fonts/kugile.ttf",
  variable: "--font-raindrop",
  display: "swap",
});

// ✅ Google font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${kugile.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
