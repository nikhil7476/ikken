import Head from "next/head";
import { Row, Col, Tab, Nav, Accordion, Container } from "react-bootstrap";
import BlogList from "@/components/BlogList";
import BlogForm from "@/components/BlogForm";
import NewsletterList from "@/components/NewsletterList";

const AdminPage = () => {
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
            <Row>
              <Col>
                <h1>Admin Dashboard</h1>
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
                      <Nav.Link eventKey="third">Newsletter</Nav.Link>
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
