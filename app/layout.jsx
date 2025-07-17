import localFont from "next/font/local";
import { Karla, Bodoni_Moda } from "next/font/google";
import Navbar from "./(components)/nav/Navbar";
import Footer from "./(components)/nav/Footer";
import "./globals.css";

// ✅ Local font
// const fitzgerald = localFont({
//   src: "./fonts/fitzgerald.ttf",
//   variable: "--font-fitzgerald",
//   display: "swap",
// });

// // ✅ Local font
// const fitzgeraldBold = localFont({
//   src: "./fonts/fitzgeraldBold.ttf",
//   variable: "--font-fitzgerald-bold",
//   display: "swap",
// });

// ✅ Local font
// const fitzgeraldItalic = localFont({
//   src: "./fonts/fitzgeraldItalic.ttf",
//   variable: "--font-fitzgerald-italic",
//   display: "swap",
// });

// ✅ Google font
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

// ✅ Google font
const bodani = Bodoni_Moda({
  variable: "--font-bodani",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${bodani.variable} ${karla.variable}  `}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
