import { useRouter } from "next/router";
import { blogPosts } from "@/utils/blogData";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find((post) => post.slug === slug);
  const currentIndex = blogPosts.findIndex((post) => post.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;
  const prevPost = blogPosts[currentIndex - 1] || null;

  if (!post) return <p>Loading...</p>;

  return (
    <>
      <div className={styles.single}>
        <section className={styles.banner}>
          <Container>
            <Row className="justify-content-between">
              <Col
                xl={7}
                lg={7}
                md={7}
                sm={12}
                xs={12}
                className="align-content-center p-4 m-0"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <span className="global-authors">By {post.author}</span>
                <h1 className="global-title">
                  <span className="global-underline">{post.title}</span>
                </h1>
                <p className="global-excerpt">{post.excerpt}</p>
                <span className="global-tags">{post.tag.join(" | ")}</span>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className="p-0 m-0 align-content-center"
                data-aos="fade-left"
                data-aos-duration="1500"
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
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.desc}>
          <Container>
            <Row
              className="justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                <p style={{ textAlign: "justify" }}>{post.content}</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.quotes}>
          <Container>
            <Row
              className="justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                <p>{post.quote}</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.desc}>
          <Container>
            <Row
              className="justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                <p style={{ textAlign: "justify" }}>{post.content}</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.desc}>
          <Container>
            <Row data-aos="fade-up" data-aos-duration="1500">
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <Row
                  style={{ backgroundColor: "#F9F9F9" }}
                  className="justify-content-start"
                >
                  <Col
                    xl={4}
                    lg={4}
                    md={4}
                    sm={4}
                    xs={4}
                    className="align-content-center"
                  >
                    {nextPost && (
                      <Image
                        src={nextPost.image}
                        alt={nextPost.title}
                        width={nextPost.imageWidth}
                        height={nextPost.imageHeight}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    )}
                  </Col>
                  <Col
                    xl={7}
                    lg={7}
                    md={7}
                    sm={7}
                    xs={7}
                    className="align-content-center p-2"
                  >
                    <span>Newer Story</span>
                    <h2 className="global-title">
                      <Link
                        href={
                          nextPost
                            ? `/blog/${encodeURIComponent(nextPost.slug)}`
                            : "#"
                        }
                        className="global-underline"
                      >
                        {nextPost ? nextPost.title : "No Newer Story"}
                      </Link>
                    </h2>
                  </Col>
                </Row>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <Row
                  style={{ backgroundColor: "#F1F1F1", marginTop: "60px" }}
                  className="justify-content-end"
                >
                  <Col
                    xl={7}
                    lg={7}
                    md={7}
                    sm={7}
                    xs={7}
                    className="align-content-center p-2"
                  >
                    <span>Older Story</span>
                    <h2 className="global-title">
                      <Link
                        href={
                          prevPost
                            ? `/blog/${encodeURIComponent(prevPost.slug)}`
                            : "#"
                        }
                        className="global-underline"
                      >
                        {prevPost ? prevPost.title : "No Older Story"}
                      </Link>
                    </h2>
                  </Col>
                  <Col
                    xl={4}
                    lg={4}
                    md={4}
                    sm={4}
                    xs={4}
                    className="align-content-center"
                  >
                    {prevPost && (
                      <Image
                        src={prevPost.image}
                        alt={prevPost.title}
                        width={prevPost.imageWidth}
                        height={prevPost.imageHeight}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
