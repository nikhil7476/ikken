import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Ikken</title>
        <meta
          name="description"
          content="Feel free to reach out to us for any inquiries. We're here to help"
        />
      </Head>
      <div>
        <section>
          <Container>
            <Row>
              <Col
                xl={4}
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="p-0"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <Image
                  src="/contact.webp"
                  alt="Contact_Banner"
                  title="Contact Us"
                  width={1080}
                  height={1441}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
              <Col
                className="align-content-center p-4"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h1>Contact Us</h1>
                <p>
                  Ready to take your views to the next level? Provide the
                  necessary details in the form, and our dedicated team will
                  reach out promptly.
                </p>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container data-aos="fade-up" data-aos-duration="1500">
            <Row>
              <Col className="align-content-center">
                <Row className="mt-4 mb-4">
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="align-content-center"
                  >
                    <div className="p-4">
                      <h2>Reach Out to Us</h2>
                      <p>
                        Feel free to reach out to us for any inquiries.{" "}
                        {"We're"} here to help
                      </p>
                    </div>
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="text-center"
                  >
                    <div className="p-4 border border-secondary">
                      <Link
                        href="https://maps.app.goo.gl/xnEUQw6MNnDxquht8"
                        title="Location"
                        target="_blank"
                      >
                        <FaMapMarkerAlt size={50} />
                        <h2>Location</h2>
                        <p>Lucknow, Uttar Pradesh</p>
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4 mb-4">
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="text-center"
                  >
                    <div className="p-4 border border-secondary">
                      <Link
                        href="mailto:nikhil9027917476@gmail.com"
                        title="Email"
                      >
                        <FaEnvelope size={50} />
                        <h2>Email</h2>
                        <p>nikhil9027917476@gmail.com</p>
                      </Link>
                    </div>
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="text-center"
                  >
                    <div className="p-4 border border-secondary">
                      <Link href="tel:+91-9027917476" title="Phone">
                        <FaPhoneAlt size={50} />
                        <h2>Phone</h2>
                        <p>+91-9027917476</p>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container data-aos="fade-up" data-aos-duration="1500">
            <Row>
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className="align-content-center"
              >
                <h2>Explore Our Location!</h2>
                <p>
                  Find us on the map & visit our office to discuss your ideas.
                </p>
              </Col>
              <Col xl={8} lg={8} md={6} sm={12} xs={12} className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177393.1211295851!2d80.77769685019571!3d26.848596479302525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1740996761440!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
