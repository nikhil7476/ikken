import { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

export default function BlogForm() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    slug: "",
    date: "",
    tag: "",
    quote: "",
    excerpt: "",
    content: "",
    image: "",
    imageWidth: "",
    imageHeight: "",
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

    // Convert comma-separated tags into an array
    const blogData = {
      ...formData,
      tag: formData.tag.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await fetch("/api/blogs/addBlogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Blog added successfully!" });
        setFormData({
          author: "",
          title: "",
          slug: "",
          date: "",
          tag: "",
          quote: "",
          excerpt: "",
          content: "",
          image: "",
          imageWidth: "",
          imageHeight: "",
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
      <h2>Add New Blog</h2>
      {message.text && <Alert variant={message.type}>{message.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="slug">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="tag">
          <Form.Label>Tags (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="quote">
          <Form.Label>Quote</Form.Label>
          <Form.Control
            type="text"
            name="quote"
            value={formData.quote}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="excerpt">
          <Form.Label>Excerpt</Form.Label>
          <Form.Control
            type="text"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="imageWidth">
          <Form.Label>Image Width</Form.Label>
          <Form.Control
            type="text"
            name="imageWidth"
            value={formData.imageWidth}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="imageHeight">
          <Form.Label>Image Height</Form.Label>
          <Form.Control
            type="text"
            name="imageHeight"
            value={formData.imageHeight}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Blog"}
        </Button>
      </Form>
    </Container>
  );
}
