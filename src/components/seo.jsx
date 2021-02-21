/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import logo from "../images/logo_orange.png";

function SEO({ description, lang, keywords, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <meta name="description" content={metaDescription} />
      <meta
        property="og:title"
        content={`${title} | ${site.siteMetadata.title}`}
      />
      <meta property="og:image" content={logo} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={site.siteMetadata.author} />
      <meta
        property="twitter:title"
        content={`${title} | ${site.siteMetadata.title}`}
      />
      <meta property="twitter:description" content={metaDescription} />
      {keywords.length && (
        <meta name="keywords" content={keywords.join(`, `)} />
      )}
      {children}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  description: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
