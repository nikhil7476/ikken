import { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Josefin_Sans } from "next/font/google";
import { Container } from "react-bootstrap";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

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
      <Container>
        {isClient && (
          <span className="header-description">
            Thoughts, stories, and ideas
          </span>
        )}
        <Header />
        <Component {...pageProps} />
        <Footer />
        {isClient && (
          <ul className="footer-description">
            <li>Follow:</li>
            <li>
              <Link href="#" title="Facebook">
                <FiFacebook />
              </Link>
            </li>
            <li>
              <Link href="#" title="Instagram">
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link href="#" title="Twitter">
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" title="LinkedIn">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        )}
      </Container>
    </div>
  );
}
