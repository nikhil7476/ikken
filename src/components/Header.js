import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Header.module.css";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className={styles.hdr}>
        <Container className="pt-4 pb-4">
          <Row>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className="align-content-center"
            >
              <Link href="/" title="Ikken" className="global-underline">
                <Image
                  src="/ikken-logo.webp"
                  alt="Ikken-Logo"
                  title="Ikken"
                  width={975}
                  height={334}
                  style={{ width: "25%", height: "auto" }}
                />
              </Link>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className="align-content-center"
            >
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/" title="Home">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/about" title="About">
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/blog" title="Blog">
                    Blog
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact" title="Contact">
                    Contact
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" title="Search">
                    <FaSearch
                      style={{ fontSize: "20px", marginBottom: "10px" }}
                    />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
