import clsx from "clsx";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import { BsFillCalendarFill, BsLaptop, BsGearFill } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import { GiBoxingGlove, GiGuitar, GiPhotoCamera, GiRun } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import USFlag from "../assets/us_flag.inline.svg";
import SwissFlag from "../assets/swiss_flag.inline.svg";
import GermanFlag from "../assets/german_flag.inline.svg";
import FrenchFlag from "../assets/french_flag.inline.svg";
import IndicatorNav from "../components/indicator-nav";
import Layout from "../components/layout";
import Language from "../components/pages/cv/language";
import { motion } from "framer-motion";
import SEO from "../components/seo";

const frontendSkills = [
  {
    title: "HTML / CSS / Js",
    percentage: 90,
  },
  {
    title: "React",
    percentage: 90,
  },
  {
    title: "Vue",
    percentage: 75,
  },
  {
    title: "Angular",
    percentage: 40,
  },
];

const backendSkills = [
  {
    title: "NodeJS",
    percentage: 90,
  },
  {
    title: "Typescript",
    percentage: 90,
  },
  {
    title: "Python",
    percentage: 80,
  },
  {
    title: "C# ASP.NET Core",
    percentage: 70,
  },
  {
    title: "PHP",
    percentage: 70,
  },
];

const otherSkills = [
  {
    title: "Data Processing / Analysis",
    percentage: 60,
  },
  {
    title: "Automation / Scripting",
    percentage: 40,
  },
  {
    title: "Machine Learning (Tensorflow, SciKit, etc.)",
    percentage: 20,
  },
];

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
  const [skillsRef, skillsVisible] = useInView({ threshold: 0.75 });
  const [passionsRef, passionsVisible] = useInView({ threshold: 0.75 });

  const visibleSection = React.useMemo(() => {
    if (introVisible) return "intro";
    if (languagesVisible) return "languages";
    if (educationVisible) return "education";
    if (skillsVisible) return "skills";
    if (passionsVisible) return "passions";
  }, [
    introVisible,
    languagesVisible,
    educationVisible,
    skillsVisible,
    passionsVisible,
  ]);

  return (
    <Layout>
      <SEO title="Resume" />
      <div
        className={clsx(
          "px-4",
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
          <div className={clsx("flex-full", "md:flex-2", "mb-4", "md:mb-0")}>
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
          <h2 className={clsx("text-2xl", "mb-8")}>Languages</h2>
          <div
            className={clsx("grid", "grid-cols-1", "md:grid-cols-2", "gap-4")}>
            <Language flag={USFlag} progress={1}>
              <p>
                English
                <br />
                <span className={clsx("text-gray-500")}>Native</span>
              </p>
            </Language>
            <Language flag={SwissFlag} progress={1}>
              <p>
                Swiss German
                <br />
                <span className={clsx("text-gray-500")}>Native</span>
              </p>
            </Language>
            <Language flag={GermanFlag} progress={1}>
              <p>
                German
                <br />
                <span className={clsx("text-gray-500")}>C2</span>
              </p>
            </Language>
            <Language flag={FrenchFlag} progress={0.66} centerFlag={true}>
              <p>
                French
                <br />
                <span className={clsx("text-gray-500")}>B2</span>
              </p>
            </Language>
          </div>
        </div>
        <div className={clsx("mb-8")} ref={skillsRef}>
          <h2 className={clsx("text-2xl", "mb-8")}>Skills</h2>
          <div
            className={clsx("grid", "gap-4", "grid-cols-1", "md:grid-cols-3")}>
            <div
              className={clsx(
                false && ["rounded", "bg-navy-600", "shadow-md", "p-4"],
                "flex",
                "flex-col",
              )}>
              <BsLaptop className={clsx("text-navy-300", "text-3xl", "mb-4")} />
              <h3
                className={clsx("text-md", "mb-4", "border-b", "border-white")}>
                Frontend Development
              </h3>
              {frontendSkills.map(({ title, percentage }) => (
                <React.Fragment key={title}>
                  <p className={clsx("text-gray-200", "text-sm", "mb-2")}>
                    {title}
                  </p>
                  <div
                    className={clsx(
                      "border-orange-500",
                      "border",
                      "h-4",
                      "mb-4",
                    )}>
                    <motion.div
                      className={clsx("h-full", "bg-orange-500")}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}></motion.div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div
              className={clsx(
                false && ["rounded", "bg-navy-600", "shadow-md", "p-4"],
                "flex",
                "flex-col",
              )}>
              <BiServer className={clsx("text-navy-300", "text-3xl", "mb-4")} />
              <h3
                className={clsx("text-md", "mb-4", "border-b", "border-white")}>
                Backend Development
              </h3>
              {backendSkills.map(({ title, percentage }) => (
                <React.Fragment key={title}>
                  <p className={clsx("text-gray-200", "text-sm", "mb-2")}>
                    {title}
                  </p>
                  <div
                    className={clsx(
                      "border-orange-500",
                      "border",
                      "h-4",
                      "mb-4",
                    )}>
                    <motion.div
                      className={clsx("h-full", "bg-orange-500")}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}></motion.div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div
              className={clsx(
                false && ["rounded", "bg-navy-600", "shadow-md", "p-4"],
                "flex",
                "flex-col",
              )}>
              <BsGearFill
                className={clsx("text-navy-300", "text-3xl", "mb-4")}
              />
              <h3
                className={clsx("text-md", "mb-4", "border-b", "border-white")}>
                Other
              </h3>
              {otherSkills.map(({ title, percentage }) => (
                <React.Fragment key={title}>
                  <p className={clsx("text-gray-200", "text-sm", "mb-2")}>
                    {title}
                  </p>
                  <div
                    className={clsx(
                      "border-orange-500",
                      "border",
                      "h-4",
                      "mb-4",
                    )}>
                    <motion.div
                      className={clsx("h-full", "bg-orange-500")}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}></motion.div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className={clsx("mb-8")} ref={educationRef}>
          <h2 className={clsx("text-2xl", "mb-8")}>Education</h2>
          <BsFillCalendarFill />
        </div>
        <div className={clsx("mb-8")} ref={passionsRef}>
          <h2 className={clsx("text-2xl", "mb-8")}>Passions</h2>
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
          { text: "Skills", id: "skills" },
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
