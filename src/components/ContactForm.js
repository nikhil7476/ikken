import { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message_content: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    const contactData = {
      ...formData,
    };

    try {
      const res = await fetch("/api/contacts/addContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: "success",
          text: "Contact details added successfully!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message_content: "",
        });
      } else {
        setMessage({
          type: "danger",
          text: data.message || "Failed to add blog",
        });
      }
    } catch (error) {
      setMessage({
        type: "danger",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      {message.text && <Alert variant={message.type}>{message.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-2">
            <Form.Group controlId="name">
              <Form.Label>
                Name<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-2">
            <Form.Group controlId="email">
              <Form.Label>
                Email<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-2">
            <Form.Group controlId="phone">
              <Form.Label>
                Phone<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2">
            <Form.Group controlId="subject">
              <Form.Label>
                Subject<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2">
            <Form.Group controlId="message_content">
              <Form.Label>
                Message<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message_content"
                value={formData.message_content}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="secondary"
          type="submit"
          className="mt-3"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Your Views"}
        </Button>
      </Form>
    </Container>
  );
}
