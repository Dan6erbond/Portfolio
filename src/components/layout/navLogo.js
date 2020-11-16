import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const NavLogo = () => (
  <StaticQuery
    query={graphql`
      query LogoGreenQuery {
        logo: file(relativePath: { eq: "logo - green.png" }) {
          childImageSharp {
            fixed(width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="logo"
        fixed={data?.logo?.childImageSharp?.fixed}
        className="d-inline-block align-top"
      />
    )}
  />
);
export default NavLogo;
