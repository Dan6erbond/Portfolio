import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import { Navbar } from "react-bootstrap";
import "./header.scss";

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo - green.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Navbar bg="white">
      <Link to="/">
        <Navbar.Brand>
          {data?.placeholderImage?.childImageSharp?.fixed ? (
            <Img
              alt="logo"
              fixed={data.placeholderImage.childImageSharp.fixed}
              className="d-inline-block align-top"
            />
          ) : (
            <div>Picture not found</div>
          )}{" "}
          {siteTitle}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end" />
    </Navbar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
