import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { blogPosts } from "@/utils/blogData";

export default function Home() {
  const latestPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1, 5);
  const middlePosts = blogPosts[5];
  const lastPosts = blogPosts.slice(6, 8);

  return (
    <>
      <Head>
        <title>Ikken - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-main">
        <section className={styles.banner}>
          <Container>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="align-content-center p-4 m-0"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <span className="global-authors">By {latestPost.author}</span>
                <h1 className="global-title">
                  <Link
                    href={`/blog/${encodeURIComponent(latestPost.slug)}`}
                    className="global-underline"
                  >
                    {latestPost.title}
                  </Link>
                </h1>
                <p className="global-excerpt">{latestPost.excerpt}</p>
                <span className="global-tags">
                  {latestPost.tag.join(" | ")}
                </span>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="p-0 m-0"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Link
                  href={`/blog/${encodeURIComponent(latestPost.slug)}`}
                  title={latestPost.title}
                >
                  <Image
                    src={latestPost.image}
                    alt={latestPost.title}
                    width={latestPost.imageWidth}
                    height={latestPost.imageHeight}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className={styles.blgCont}>
            {otherPosts.map((post) => (
              <Row
                key={post.id}
                className={styles.otherPostRow}
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
                  <span className="global-tags">{post.tag}</span>
                </Col>
              </Row>
            ))}
          </Container>
          <Container className={styles.middleCont}>
            <Row
              data-aos="fade-up"
              data-aos-duration="1500"
              className={styles.otherPostRow}
            >
              <Col xl={12} lg={12} md={12} sm={12} xs={12} className="m-0 p-0">
                <div
                  style={{
                    backgroundImage: `url(${middlePosts.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    minHeight: "250px",
                  }}
                >
                  <h2 style={{ display: "none" }}>Middle Post</h2>
                </div>
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="align-content-center p-4 m-0 text-center"
              >
                <span className="global-authors">By {middlePosts.author}</span>
                <h1 className="global-title">
                  <Link
                    href={`/blog/${encodeURIComponent(middlePosts.slug)}`}
                    className="global-underline"
                  >
                    {middlePosts.title}
                  </Link>
                </h1>
                <p className="global-excerpt">{middlePosts.excerpt}</p>
                <span className="global-tags">{middlePosts.tag}</span>
              </Col>
            </Row>
          </Container>
          <Container className={styles.middleCont}>
            {lastPosts.map((post) => (
              <Row
                key={post.id}
                className={styles.otherPostRow}
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
                  <span className="global-tags">{post.tag}</span>
                </Col>
              </Row>
            ))}
          </Container>
        </section>
        <section>
          <Container>
            <Row
              className={styles.loadBtn}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link
                  href="/blog"
                  title="See All Blog"
                  className={styles.button}
                >
                  See All Blog
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
