import clsx from "clsx";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { GiBoxingGlove, GiGuitar, GiPhotoCamera, GiRun } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
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

  const [introRef, introVisible] = useInView({ threshold: 0.75 });
  const [languagesRef, languagesVisible] = useInView({ threshold: 0.75 });
  const [educationRef, educationVisible] = useInView({ threshold: 0.75 });
  const [passionsRef, passionsVisible] = useInView({ threshold: 0.75 });

  const visibleSection = React.useMemo(() => {
    if (introVisible) return "intro";
    if (languagesVisible) return "languages";
    if (educationVisible) return "education";
    if (passionsVisible) return "passions";
  }, [introVisible, languagesVisible, educationVisible]);

  return (
    <Layout>
      <SEO title="Resume" />
      <div
        className={clsx(
          "px-2",
          "md:px-8",
          "py-8",
          "mx-auto",
          "max-w-screen-lg",
        )}>
        <h1 className={clsx("text-3xl", "mb-8")}>Resume</h1>
        <div
          className={clsx(
            "flex",
            "flex-wrap",
            "justify-center",
            "md:justify-evenly",
            "mb-8",
          )}
          ref={introRef}>
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
          <div className={clsx("flex-full", "md:flex-4")}>
            Hi! I'm an engineering student based in Switzerland, currently
            studying at the Computing College in Aarau.
            <br />
            <br />
            I've worked on numerous professional and private projects in the
            fields of webdesign, back-end and data analysis.
            <br />
            <br />
            Furthermore, I have a solid background in common programming
            languages such as C#, Java, and Python, as well as a profound
            understanding of layout & design.
          </div>
        </div>
        <div className={clsx("mb-8")} ref={languagesRef}>
          <h3 className={clsx("text-2xl", "mb-8")}>Languages</h3>
          <div
            className={clsx(
              "grid",
              "grid-cols-1",
              "md:grid-cols-2",
              "gap-4",
            )}></div>
        </div>
        <div className={clsx("mb-8")} ref={educationRef}>
          <h3 className={clsx("text-2xl", "mb-8")}>Education</h3>
          <BsFillCalendarFill />
        </div>
        <div className={clsx("mb-8")} ref={passionsRef}>
          <h3 className={clsx("text-2xl", "mb-8")}>Passions</h3>
          <div className={clsx("flex", "flex-col")}>
            <div
              className={clsx(
                "flex",
                "items-center",
                "p-4",
                "text-xl",
                "border-b-2",
                "border-navy-300",
                "hover:bg-navy-600",
                "mb-2",
                "transition-colors",
              )}>
              <GiGuitar className={clsx("mr-2", "inline", "text-navy-100")} />
              Guitar
            </div>
            <div
              className={clsx(
                "flex",
                "items-center",
                "p-4",
                "text-xl",
                "border-b-2",
                "border-navy-300",
                "hover:bg-navy-600",
                "mb-2",
                "transition-colors",
              )}>
              <GiRun className={clsx("mr-2", "inline", "text-navy-100")} />
              Jogging
            </div>
            <div
              className={clsx(
                "flex",
                "items-center",
                "p-4",
                "text-xl",
                "border-b-2",
                "border-navy-300",
                "hover:bg-navy-600",
                "mb-2",
                "transition-colors",
              )}>
              <GiPhotoCamera
                className={clsx("mr-2", "inline", "text-navy-100")}
              />
              Photography
            </div>
            <div
              className={clsx(
                "flex",
                "items-center",
                "p-4",
                "text-xl",
                "border-b-2",
                "border-navy-300",
                "hover:bg-navy-600",
                "mb-2",
                "transition-colors",
              )}>
              <GiBoxingGlove
                className={clsx("mr-2", "inline", "text-navy-100")}
              />
              Karate
            </div>
          </div>
        </div>
      </div>
      <IndicatorNav
        items={[
          { text: "Intro", id: "intro" },
          { text: "Languages", id: "languages" },
          { text: "Education", id: "education" },
          { text: "Passions", id: "passions" },
        ]}
        className={clsx(
          "fixed",
          "pointer-events-none",
          "right-0",
          "top-0",
          "bottom-0",
          "z-50",
        )}
        activeItemId={visibleSection}
        breakpoint="lg"
      />
    </Layout>
  );
};

export default ResumePage;
