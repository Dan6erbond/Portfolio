import clsx from "clsx";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FiShare2 } from "react-icons/fi";

const Template = ({ data }) => {
  const {
    mdx: { frontmatter, body },
    site: { siteMetadata },
  } = data;

  const [canShare, setCanShare] = React.useState(false);

  const share = React.useCallback(() => {
    navigator.share({
      title: `${frontmatter.title} | ${siteMetadata.title}`,
      url: window.location.href,
    });
  }, [frontmatter]);

  React.useEffect(() => {
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div
        className={clsx(
          "px-4",
          "md:px-8",
          "py-8",
          "mx-auto",
          "max-w-screen-lg",
        )}>
        <h1 className={clsx("text-4xl", "mb-2", "leading-10")}>
          {frontmatter.title}
        </h1>
        <p className={clsx("mb-4")}>{frontmatter.date}</p>
        <p className={clsx("mb-8", "text-gray-300")}>
          {frontmatter.description}
        </p>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "md:flex-row",
            "justify-between",
          )}>
          <div className={clsx("mt-8")}>
            <p className={clsx("mb-2", "font-bold")}>{frontmatter.author}</p>
            <p className={clsx("mb-4")}>{frontmatter.authorTags}</p>
            {canShare && (
              <button
                className={clsx("hover:text-orange-500", "transition-colors")}
                onClick={share}>
                <FiShare2 />
              </button>
            )}
          </div>
          <div className={clsx("max-w-screen-md")}>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        author
        authorTags
        date(formatString: "DD MMMM, YYYY")
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
