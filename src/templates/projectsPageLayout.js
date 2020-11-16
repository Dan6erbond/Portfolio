import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import Banner from "../components/banner";
import Layout from "../components/layout";
import ScrollDown from "../components/scrollDown";
import SEO from "../components/seo";

const shortcodes = { Link }; // Provide common components here

const PageTemplate = ({ data: { mdx, allImages } }) => {
  const ref = React.useRef();

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      {mdx.frontmatter.banner && (
        <Banner
          bannerHeight="60vh"
          image={
            allImages.edges.find(
              i => i.node.fluid.originalName == mdx.frontmatter.banner,
            )?.node?.fluid
          }
        >
          <h2 className="banner-title">{mdx.frontmatter.title}</h2>
          {mdx.frontmatter.description && (
            <p className="banner-text">{mdx.frontmatter.description}</p>
          )}
          {mdx.frontmatter.download && (
            <a
              className="btn btn-outline-primary flat-button"
              href={mdx.frontmatter.download}
              download
            >
              <FaDownload /> Download
            </a>
          )}
          <ScrollDown targetRef={ref} label="Read More" />
        </Banner>
      )}
      <Container ref={ref} fluid="md">
        {!mdx.frontmatter.banner && (
          <div className="mb-4">
            <h2 className="text-primary">{mdx.frontmatter.title}</h2>
            {mdx.frontmatter.description && (
              <p className="text-primary">{mdx.frontmatter.description}</p>
            )}
            {mdx.frontmatter.download && (
              <a
                className="btn btn-outline-primary flat-button"
                href={mdx.frontmatter.download}
                download
              >
                <FaDownload /> Download
              </a>
            )}
          </div>
        )}
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        download
        banner
      }
    }
    allImages: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 2560) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
