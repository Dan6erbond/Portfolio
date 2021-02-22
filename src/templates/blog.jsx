import clsx from "clsx";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FiShare2 } from "react-icons/fi";
import IndicatorNav from "../components/indicator-nav";

const Template = ({ data }) => {
  const {
    mdx: { frontmatter, body, headings },
    site: { siteMetadata },
  } = data;

  const [canShare, setCanShare] = React.useState(false);
  const [activeItemdId, setActiveItemId] = React.useState(
    headings.length && headings[0].value,
  );

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

    let handler;
    if (headings.length) {
      handler = () => {
        for (const heading of headings) {
          const el = document.getElementById(heading.value);
          const rect = el.getBoundingClientRect();
          const visible =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight ||
                document.documentElement
                  .clientHeight) /* or $(window).height() */ &&
            rect.right <=
              (window.innerWidth ||
                document.documentElement
                  .clientWidth); /* or $(window).width() */
          if (visible) {
            setActiveItemId(heading.value);
            break;
          }
        }
      };

      window.addEventListener("scroll", handler);
    }

    return () => {
      if (handler) {
        window.removeEventListener("scroll", handler);
      }
    };
  }, []);

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      {frontmatter.tableOfContents && (
        <IndicatorNav
          items={headings.map((heading) => ({
            id: heading.value,
            text: heading.value,
          }))}
          activeItemId={activeItemdId}
          className={clsx("fixed", "right-0", "top-0", "bottom-0", "z-50")}
          breakpoint="2xl"
          onClick={(id) => (location.hash = "#" + id)}
        />
      )}
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
          <div className={clsx("flex-grow")}>
            <div className={clsx("p-8")}>
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
            {frontmatter.tableOfContents && (
              <IndicatorNav
                items={headings.map((heading) => ({
                  id: heading.value,
                  text: heading.value,
                }))}
                activeItemId={activeItemdId}
                className={clsx("2xl:hidden")}
                onClick={(id) => (location.hash = "#" + id)}
              />
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
        tableOfContents
      }
      headings(depth: h1) {
        depth
        value
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
