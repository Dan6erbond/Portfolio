import clsx from "clsx";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import IndicatorNav from "../components/indicator-nav";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ResumePage = () => {
  const { profileImg } = useStaticQuery(
    graphql`
      query ResumePageQuery {
        profileImg: file(relativePath: { eq: "ravi_2_1_cropped_1.png" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <SEO title="Resume" />
      <div className={clsx("px-2", "md:px-8", "py-8")}>
        <div
          className={clsx(
            "flex",
            "flex-wrap",
            "justify-center",
            "md:justify-evenly",
          )}>
          <div className={clsx("flex-full", "md:flex-2")}>
            <div
              className={clsx(
                "w-3/4",
                "max-w-xxs",
                "rounded-lg",
                "border-4",
                "border-navy-600",
                "mx-auto",
              )}>
              <Img
                className={clsx("w-full", "shadow")}
                fluid={profileImg?.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className={clsx("flex-full", "md:flex-4")}></div>
        </div>
      </div>
      <IndicatorNav
        items={[
          { text: "Intro", id: "intro" },
          { text: "Technologies", id: "technologies" },
          { text: "About", id: "about" },
        ]}
        className={clsx(
          "fixed",
          "pointer-events-none",
          "right-0",
          "top-0",
          "bottom-0",
          "z-50",
        )}
        activeItemId={"intro"}
      />
    </Layout>
  );
};

export default ResumePage;
