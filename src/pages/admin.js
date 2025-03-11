import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Table,
  Row,
  Col,
  Tab,
  Nav,
  Accordion,
  Container,
} from "react-bootstrap";
import BlogList from "@/components/BlogList";
import BlogForm from "@/components/BlogForm";

const AdminPage = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/newsletter/getSubscribers")
      .then((res) => res.text())
      .then((data) => {
        console.log("Raw API Response:", data);
        return JSON.parse(data);
      })
      .then((json) => {
        if (json.success) {
          setSubscribers(json.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching subscribers:", err);
        setLoading(false);
      });
  }, []);

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
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <BlogForm />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <BlogList />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {loading ? (
                        <p className="text-center">Loading subscribers...</p>
                      ) : (
                        <Table
                          striped
                          bordered
                          hover
                          responsive
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>S.No.</th>
                              <th>Subscriber Email</th>
                              <th>Date Subscribed</th>
                            </tr>
                          </thead>
                          <tbody>
                            {subscribers.length > 0 ? (
                              subscribers.map((subscriber, index) => (
                                <tr key={subscriber._id}>
                                  <td>{index + 1}</td>
                                  <td>{subscriber.email}</td>
                                  <td>
                                    {new Date(
                                      subscriber.createdAt
                                    ).toLocaleString()}
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="3" className="text-center">
                                  No subscribers found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </Table>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
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
                  {loading ? (
                    <p className="text-center">Loading subscribers...</p>
                  ) : (
                    <Table striped bordered hover responsive className="mt-3">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Subscriber Email</th>
                          <th>Date Subscribed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscribers.length > 0 ? (
                          subscribers.map((subscriber, index) => (
                            <tr key={subscriber._id}>
                              <td>{index + 1}</td>
                              <td>{subscriber.email}</td>
                              <td>
                                {new Date(
                                  subscriber.createdAt
                                ).toLocaleString()}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3" className="text-center">
                              No subscribers found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  )}
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
