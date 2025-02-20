import { useEffect } from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Adjust weights as needed
  variable: "--font-josefin-sans", // Optional: Use CSS variable
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={josefinSans.variable}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
