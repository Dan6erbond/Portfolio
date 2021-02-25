import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

function SEO({ description, lang, keywords, title, children, image, article }) {
  const { pathname } = useLocation();

  const { site, logo } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            url: siteUrl
            image
            author
            twitterUsername
          }
        }
      }
    `,
  );

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: `${site.siteMetadata.url}${image || site.siteMetadata.image}`,
    url: `${site.siteMetadata.url}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.titleTemplate}>
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta
        property="og:title"
        content={`${title} | ${site.siteMetadata.title}`}
      />
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="twitter:card" content="summary" />
      {site.siteMetadata.twitterUsername && (
        <meta
          property="twitter:creator"
          content={site.siteMetadata.twitterUsername}
        />
      )}
      <meta
        property="twitter:title"
        content={`${seo.title} | ${site.siteMetadata.title}`}
      />
      <meta property="twitter:description" content={seo.description} />
      {seo.image && <meta property="twitter:image" content={seo.image} />}
      {keywords.length && (
        <meta name="keywords" content={keywords.join(`, `)} />
      )}
      {children}
    </Helmet>
  );
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: "en",
  meta: [],
  keywords: [],
  article: false,
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  article: PropTypes.bool,
};

export default SEO;
