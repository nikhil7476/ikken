import { Container, Form, Button, Row, Col } from "react-bootstrap";
import styles from "@/styles/Footer.module.css";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.status === 201) {
        setEmail(""); // Reset input field after successful submission
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <section className={styles.ftrMain}>
          <Container>
            <Row className="justify-content-center">
              <Col
                lg={7}
                md={7}
                sm={10}
                xs={11}
                className={styles.subscribeContainer}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
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
                      disabled={loading}
                    />
                  </Form.Group>
                  <Button
                    variant="outline-dark"
                    type="submit"
                    className={styles.button}
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "SUBSCRIBE"}
                  </Button>
                </Form>
                {message && <p className="mt-4">{message}</p>}
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.blwFtr}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={6} md={6} sm={12} className="align-content-center">
                <p className="mb-0 text-center">
                  Ikken &copy; {new Date().getFullYear()}. All Right Reserved.
                  Published By{" "}
                  <Link href="/about#nikhil" title="Nikhil Mishra">
                    Nikhil Mishra
                  </Link>
                  .
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Footer;
