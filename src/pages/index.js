import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import About from "../components/pages/home/about";
import ScrollDown from "../components/scroll-down";
import SEO from "../components/seo";

const IndexPage = () => {
  const aboutRef = React.useRef(null);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Banner image={data?.placeholderImage?.childImageSharp?.fluid}>
        <React.Fragment>
          <h2 className="banner-title">RaviAnand Mohabir</h2>
          <p className="banner-text">
            I'm an engineering student in Switzerland, experienced with Java, C#
            and Python.
          </p>
          <a
            className="btn btn-outline-primary flat-button"
            href="mailto:moravrav@gmail.com?subject=Hi!"
          >
            Message Me
          </a>
          <ScrollDown targetRef={aboutRef} label="About Me" />
        </React.Fragment>
      </Banner>
      <br />
      <About />
      <div style={{ textAlign: "center" }}>
        <a className="btn btn-outline-primary flat-button" href="/projects">
          Projects
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
