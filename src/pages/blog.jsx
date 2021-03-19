import clsx from "clsx";
import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  return (
    <Layout>
      <SEO title="Blog" description="View all my blog posts." />
      <div
        className={clsx(
          "px-4",
          "md:px-8",
          "py-8",
          "mx-auto",
          "max-w-screen-lg",
        )}>
        <h1 className={clsx("text-3xl", "mb-4")}>My Blog</h1>
        <p className={clsx("mb-8")}>
          View the blog posts I've written over the years.
        </p>
        <div className={clsx("grid", "sm:grid-cols-2", "gap-4")}>
          {edges.map((edge) => (
            <div
              className={clsx(
                "p-6",
                "bg-navy-600",
                "rounded-lg",
                "shadow-lg",
                "flex",
                "flex-col",
              )}>
              <p
                className={clsx(
                  "text-2xl",
                  "leading-8",
                  "md:text-3xl",
                  "mb-2",
                  "leading-9",
                )}>
                {edge.node.frontmatter.title}
              </p>
              <p className={clsx("mb-4")}>{edge.node.frontmatter.date}</p>
              <p className={clsx("mb-8", "text-gray-400")}>
                {edge.node.frontmatter.description}
              </p>
              <div className={clsx("flex", "flex-row-reverse", "mt-auto")}>
                <Link
                  to={edge.node.frontmatter.slug + "/"}
                  className={clsx(
                    "hover:text-orange-500",
                    "transition-colors",
                  )}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            title
            description
          }
        }
      }
    }
  }
`;
