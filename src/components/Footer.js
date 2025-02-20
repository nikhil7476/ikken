"use client";

import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import styles from "@/styles/Footer.module.css";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <>
      <div>
        <section className={styles.ftrMain}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={7} md={7} sm={10} className={styles.subscribeContainer}>
                <h3 className={styles.heading}>
                  Subscribe to see what we're thinking
                </h3>
                <Form onSubmit={handleSubmit} className={styles.form}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${styles.input} text-center`}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="outline-dark"
                    type="submit"
                    className={styles.button}
                  >
                    SUBSCRIBE
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.blwFtr}>
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} className="align-content-center">
                <p className="mb-0">
                  Ikken &copy; {new Date().getFullYear()}. All Right Reserved.
                  Published with Ghost & Ikken.
                </p>
              </Col>
              <Col lg={6} md={6} sm={12} className="align-content-center">
                <ul className={styles.social}>
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
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Footer;
