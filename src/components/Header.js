import Image from "next/image";
import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Container, Button } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar expand={false}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/ikken-logo.webp"
              alt="Ikken-Logo"
              title="Ikken_Logo"
              width={975}
              height={334}
              style={{ width: "25%", height: "auto" }}
            />
          </Navbar.Brand>
          <Button variant="outline-dark" onClick={() => setShow(true)}>
            <FiMenu size={20} />
          </Button>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        backdrop
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
