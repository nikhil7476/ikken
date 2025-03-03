import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Nav,
  Container,
  Row,
  Col,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import styles from "@/styles/Header.module.css";
import { blogPosts } from "@/utils/blogData";

const staticPages = [
  { title: "Home", slug: "/" },
  { title: "About", slug: "/about" },
  { title: "Blog", slug: "/blog" },
  { title: "Contact", slug: "/contact" },
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      const blogResults = blogPosts.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
      const pageResults = staticPages.filter((page) =>
        page.title.toLowerCase().includes(query.toLowerCase())
      );
      const results = [...pageResults, ...blogResults];
      setFilteredResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSelect = (slug) => {
    router.push(slug.startsWith("/") ? slug : `/blog/${slug}`);
    setSearchTerm("");
    setShowResults(false);
  };

  return (
    <>
      <div className={styles.hdr}>
        <Container className="pt-4 pb-4">
          <Row className={styles.hdrRow}>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <Link href="/" title="Ikken">
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
              md={12}
              sm={12}
              xs={12}
              className={styles.hdrNav}
            >
              <Navbar expand="lg" className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <Nav className={styles.hdrLnk}>
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
                    <Nav.Item className={styles.searchContainer}>
                      <Form className={styles.searchForm}>
                        <div className={styles.searchInputWrapper}>
                          <FormControl
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className={styles.searchInput}
                          />
                        </div>
                      </Form>
                      {showResults && (
                        <div className={styles.searchResults}>
                          {filteredResults.length > 0 ? (
                            filteredResults.map((item, index) => (
                              <div
                                key={index}
                                className={styles.searchResultItem}
                                onClick={() => handleSelect(item.slug)}
                              >
                                {item.title}
                              </div>
                            ))
                          ) : (
                            <div className={styles.noResults}>
                              No results found
                            </div>
                          )}
                        </div>
                      )}
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
