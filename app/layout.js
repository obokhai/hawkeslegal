import { Manrope, Montserrat } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import "./globals.css";
import Header from "../components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weights: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Hawkeslegal Legal Firm",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
