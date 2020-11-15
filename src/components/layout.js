/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <main style={{ minHeight: "100vh", paddingTop: "80px" }}>
          {children}
        </main>
        <br />
        <Footer />
      </>
    )}
  />
);

export default Layout;
