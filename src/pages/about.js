import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GiSpiderWeb } from "react-icons/gi";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Ikken</title>
      </Head>
      <div className="abtMain">
        <section>
          <Container
            className="p-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Row className="justify-content-center">
              <Col xl={9} lg={9} md={9} sm={12} xs={12} className="text-center">
                <h1>Exploring Ideas, One Thought at a Time</h1>
                <p>
                  Welcome to <strong>Ikken</strong>, a blog where creativity
                  meets knowledge. Our platform is dedicated to sharing
                  insightful perspectives, innovative ideas, and engaging
                  stories across a range of topics. Whether {"you're"} here for
                  inspiration, information, or just a fresh perspective, we aim
                  to make every visit worthwhile.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container data-aos="fade-up" data-aos-duration="1500">
            <Row className="justify-content-between">
              <Col
                xl={7}
                lg={7}
                md={7}
                sm={12}
                xs={12}
                className="align-content-center"
              >
                <div style={{ textAlign: "justify" }}>
                  <h2>Our Mission</h2>
                  <p>
                    At <strong>Ikken</strong>, our goal is to build a community
                    of thinkers, learners, and creators. We strive to provide
                    content that informs, inspires, and sparks curiosity. Every
                    post is crafted with passion, ensuring that readers walk
                    away with something valuable.
                  </p>
                </div>
                <div style={{ textAlign: "justify" }}>
                  <h2>Our Story</h2>
                  <p>
                    The idea behind <strong>Ikken</strong> was born out of a
                    passion for sharing thoughts and experiences. As a front-end
                    developer and blogger, I wanted to create a space where
                    technology, creativity, and personal insights come together.
                    With a vision to make knowledge accessible and engaging,{" "}
                    <strong>Ikken</strong> became more than just a blog—it
                    became a platform for meaningful conversations.
                  </p>
                </div>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                <Image
                  src="/contact.jpeg"
                  alt="About"
                  title="About Us"
                  width={1080}
                  height={1441}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container data-aos="fade-up" data-aos-duration="1500">
            <Row className="justify-content-center">
              <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                <h2>Topics We Cover</h2>
                <p>
                  At <strong>Ikken</strong>, we explore a variety of subjects,
                  including:
                </p>
                <ul>
                  <li>
                    <strong>Web Development & Tech Trends :</strong> Insights
                    into coding, UI/UX, and the latest in technology.
                  </li>
                  <li>
                    <strong>Creative Thinking & Innovation :</strong> Exploring
                    new ideas, problem-solving techniques, and digital
                    creativity.
                  </li>
                  <li>
                    <strong>Personal Growth & Productivity :</strong> Tips on
                    self-improvement, motivation, and efficiency.
                  </li>
                  <li>
                    <strong>Industry Insights :</strong> Perspectives on the
                    evolving digital world, freelancing, and entrepreneurship.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container data-aos="fade-up" data-aos-duration="1500">
          <Row className="justify-content-between">
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <Image
                src="/nikhil-logo.jpeg"
                alt="Nikhil_Mishra"
                title="Nikhil Mishra"
                width={460}
                height={460}
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <div style={{ textAlign: "justify" }}>
                <h2>Meet the Author</h2>
                <p>
                  👋 Hi, {"I’m"} <strong>Nikhil Mishra</strong>, a front-end
                  developer and blogger passionate about technology, creativity,
                  and problem-solving. With expertise in React.js, WordPress,
                  JavaScript, and UI/UX, I use this platform to share insights,
                  experiences, and lessons learned in my journey as a developer.
                  Through <strong>Ikken</strong>, I aim to provide valuable
                  content that resonates with tech enthusiasts, creatives, and
                  lifelong learners.
                </p>
                <p>
                  We love hearing from our readers! If you have any suggestions,
                  collaboration ideas, or just want to say hello, feel free to
                  connect with us:
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  {[
                    {
                      href: "mailto:nikhil9027917476@gmail.com",
                      title: "Email",
                      icon: <FaEnvelope />,
                      text: "nikhil9027917476@gmail.com",
                    },
                    {
                      href: "https://x.com/mishranikhil01",
                      title: "@mishranikhil01",
                      icon: <FaXTwitter />,
                      text: "@mishranikhil01",
                    },
                    {
                      href: "https://www.instagram.com/mishra_nikhil01/",
                      title: "@mishra_nikhil01",
                      icon: <FaInstagram />,
                      text: "@mishra_nikhil01",
                    },
                    {
                      href: "https://nikhil-mishra.vercel.app/",
                      title: "Nikhil Mishra",
                      icon: <GiSpiderWeb />,
                      text: "Nikhil Mishra",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        title={item.title}
                        target="_blank"
                        className="global-underline"
                      >
                        {item.icon} {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
