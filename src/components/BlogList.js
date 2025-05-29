import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { MdDelete, MdEdit, MdCheck, MdCancel } from "react-icons/md";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [editBlog, setEditBlog] = useState({});

  useEffect(() => {
    fetch("/api/blogs/getBlogs")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          console.error("Unexpected API response format:", data);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog data:", err);
        setLoading(false);
      });
  }, []);

  // Function to delete blog
  const handleDelete = async (slug) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/blogs/deleteBlogs?slug=${slug}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.slug !== slug));
        alert("Blog deleted successfully!");
      } else {
        alert(data.message || "Failed to delete blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("An error occurred while deleting the blog.");
    }
  };

  // Handle edit icon click
  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditBlog({ ...blogs[index] });
  };

  // Handle form input change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle update submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/blogs/updateBlog", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editBlog),
      });
      const data = await res.json();
      if (data.success) {
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog, idx) => (idx === editIndex ? data.data : blog))
        );
        setEditIndex(null);
        alert("Blog updated successfully!");
      } else {
        alert(data.message || "Failed to update blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("An error occurred while updating the blog.");
    }
  };

  return (
    <section>
      <Container>
        {loading ? (
          <p className="text-center">Loading blogs...</p>
        ) : (
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Date</th>
                <th>Title</th>
                <th>Author</th>
                <th>Tags</th>
                <th>Quote</th>
                <th>Excerpt</th>
                <th>Slug</th>
                <th>Content</th>
                <th>Image</th>
                <th>Width</th>
                <th>Height</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td>{index + 1}</td>
                    <td>{new Date(blog.createdAt).toLocaleString()}</td>
                    {editIndex === index ? (
                      <>
                        <td>
                          <Form.Control
                            name="title"
                            value={editBlog.title}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="author"
                            value={editBlog.author}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="tag"
                            value={editBlog.tag}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="quote"
                            value={editBlog.quote}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="excerpt"
                            value={editBlog.excerpt}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="slug"
                            value={editBlog.slug}
                            onChange={handleEditChange}
                            disabled
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="content"
                            value={editBlog.content}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="image"
                            value={editBlog.image}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="imageWidth"
                            value={editBlog.imageWidth}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <Form.Control
                            name="imageHeight"
                            value={editBlog.imageHeight}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td className="text-center">
                          <MdCheck
                            style={{
                              color: "green",
                              cursor: "pointer",
                              marginRight: 8,
                            }}
                            onClick={handleUpdate}
                          />
                          <MdCancel
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => setEditIndex(null)}
                          />
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{blog.title}</td>
                        <td>{blog.author}</td>
                        <td>{blog.tag.join(", ")}</td>
                        <td>{blog.quote}</td>
                        <td>{blog.excerpt}</td>
                        <td>{blog.slug}</td>
                        <td>{blog.content}</td>
                        <td>
                          <Image
                            src={blog.image}
                            alt={blog.slug}
                            title={blog.title}
                            width={blog.imageWidth}
                            height={blog.imageHeight}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </td>
                        <td>{blog.imageWidth}px</td>
                        <td>{blog.imageHeight}px</td>
                        <td className="text-center">
                          <MdEdit
                            style={{
                              color: "blue",
                              cursor: "pointer",
                              marginRight: 8,
                            }}
                            onClick={() => handleEditClick(index)}
                          />
                          <MdDelete
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => handleDelete(blog.slug)}
                          />
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13" className="text-center">
                    No blogs found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Container>
    </section>
  );
}
