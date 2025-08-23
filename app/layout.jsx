import localFont from "next/font/local";
import { Inter, Bodoni_Moda } from "next/font/google";
import Navbar from "./(components)/nav/Navbar";
import Footer from "./(components)/nav/Footer";
import "./globals.css";


// ✅ Local font
const vogue = localFont({
  src: "./fonts/vogue.ttf",
  variable: "--font-vogue",
  display: "swap",
});

// ✅ Local font
// const fitzgeraldItalic = localFont({
//   src: "./fonts/fitzgeraldItalic.ttf",
//   variable: "--font-fitzgerald-italic",
//   display: "swap",
// });

// ✅ Google font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// ✅ Google font
const bodani = Bodoni_Moda({
  variable: "--font-bodani",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${bodani.variable} ${inter.variable} ${vogue.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
