import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { blogPosts } from "@/utils/blogData"; // Assuming blogPosts are imported from a separate file
import styles from "@/styles/Blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blgMain}>
      <section>
        <Container className="p-4">
          <Row className="justify-content-center"> 
            <Col xl={9} lg={9} md={9} sm={12} xs={12} className="text-center" >
              <h1>
                Ikken is a lightweight theme. Perfect for a fashion blog,
                lifestyle blog, travel blog, food or photography blog. {"Ikken's"}
                clean style design is the ideal choice for the minimal loving
                creative blogger.
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="p-4">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <Row
                key={post.id}
                className={`justify-content-between ${styles.blogPostRow}`}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="p-0 m-0">
                  <Link
                    href={`/blog/${encodeURIComponent(post.slug)}`}
                    title={post.title}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={post.imageWidth}
                      height={post.imageHeight}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="align-content-center p-4 m-0"
                >
                  <span className="global-authors">By {post.author}</span>
                  <h1 className="global-title">
                    <Link
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                      className="global-underline"
                    >
                      {post.title}
                    </Link>
                  </h1>
                  <p className="global-excerpt">{post.excerpt}</p>
                  <span className="global-tags">{post.tag.join(" | ")}</span>
                </Col>
              </Row>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;
