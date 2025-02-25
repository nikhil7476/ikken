import { useEffect, useState } from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  className: "josefin-sans",
});

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init();
  }, []);

  return (
    <div className={josefinSans.className}>
      {isClient && (
        <span className="header-description">Thoughts, stories, and ideas</span>
      )}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
