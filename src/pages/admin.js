import Head from "next/head";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const AdminPage = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getSubscribers")
      .then((res) => res.text()) // Convert to text first
      .then((data) => {
        console.log("Raw API Response:", data); // Debugging log
        return JSON.parse(data); // Convert to JSON
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
            <h1 className="mt-4">Newsletter Subscribers</h1>
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
                          {new Date(subscriber.createdAt).toLocaleString()}
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
          </Container>
        </section>
      </div>
    </>
  );
};

export default AdminPage;
