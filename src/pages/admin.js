import Head from "next/head";
import {
  Row,
  Col,
  Tab,
  Nav,
  Accordion,
  Container,
  Button,
} from "react-bootstrap";
import BlogList from "@/components/BlogList";
import BlogForm from "@/components/BlogForm";
import NewsletterList from "@/components/NewsletterList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AdminPage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const adminStatus = sessionStorage.getItem("isAdmin");
    if (!adminStatus) {
      router.push("/login");
    } else {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });

      if (response.ok) {
        sessionStorage.removeItem("isAdmin");
        router.replace("/");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (!isClient || !isAdmin) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Admin - Ikken</title>
        <meta
          name="description"
          content="Admin - Exploring Ideas, One Thought at a Time"
        />
      </Head>
      <div>
        <section>
          <Container>
            <Row className="mb-2 mt-2">
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <h1>Admin Dashboard</h1>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="text-end align-content-center"
              >
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="mb-4 desktop">
          <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={2} className="mt-3 border">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Add Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Blog List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Newsletters</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <div className="adminDash">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <BlogForm />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <BlogList />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <NewsletterList />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>
        <section className="mb-4 tabMob">
          <Container>
            <Accordion defaultActiveKey={["0"]} flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Add Blog</Accordion.Header>
                <Accordion.Body>
                  <BlogForm />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Blog List</Accordion.Header>
                <Accordion.Body>
                  <BlogList />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Newsletter</Accordion.Header>
                <Accordion.Body>
                  <NewsletterList />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>
      </div>
    </>
  );
};

export default AdminPage;
