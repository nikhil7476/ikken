import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section>
      <Container>
        <h2 className="mt-4">Blog List</h2>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td>{index + 1}</td>
                    <td>{blog.date}</td>
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
                    <td className="text-center">
                      <MdDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handleDelete(blog.slug)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="text-center">
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
