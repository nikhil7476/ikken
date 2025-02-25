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
                className="p-0 m-0"
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
                <Row style={{ backgroundColor: "#F9F9F9" }}>
                  <Col xl={4} lg={4} md={4} sm={12} xs={12}>
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
                  <Col
                    xl={8}
                    lg={8}
                    md={8}
                    sm={12}
                    xs={12}
                    className="align-content-center"
                  >
                    <span>Newer Story</span>
                    <Link
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                      className="global-title"
                    >
                      <h2 className="global-underline">{post.title}</h2>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <Row style={{ backgroundColor: "#F1F1F1", marginTop: "60px" }}>
                  <Col
                    xl={8}
                    lg={8}
                    md={8}
                    sm={12}
                    xs={12}
                    className="align-content-center"
                  >
                    <span>Older Story</span>
                    <Link
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                      className="global-title"
                    >
                      <h2 className="global-underline">{post.title}</h2>
                    </Link>
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12} xs={12}>
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
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
