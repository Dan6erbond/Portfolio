import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import Layout from "../components/layout";
import Jumbotron from "../components/pages/index/jumbotron";
import IndicatorNav from "../components/indicator-nav";
import Technology from "../components/pages/index/technology";
import SEO from "../components/seo";

const IndexPage = () => {
  const {
    profileImg,
    aspNetCoreLogo,
    nodeJsLogo,
    pythonLogo,
    typescriptLogo,
    vueLogo,
    allGithubData,
  } = useStaticQuery(
    graphql`
      query ImagesQuery {
        profileImg: file(relativePath: { eq: "ravi_2_1_cropped_1.png" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aspNetCoreLogo: file(relativePath: { eq: "aspnet_core_logo.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        nodeJsLogo: file(relativePath: { eq: "nodejs_logo.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        pythonLogo: file(relativePath: { eq: "python_logo.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        typescriptLogo: file(relativePath: { eq: "typescript_logo.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        vueLogo: file(relativePath: { eq: "vue_logo.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        allGithubData {
          edges {
            node {
              data {
                user {
                  repositories {
                    edges {
                      node {
                        name
                        description
                        url
                        readme {
                          text
                        }
                        languages {
                          edges {
                            node {
                              id
                              name
                              color
                            }
                          }
                        }
                        primaryLanguage {
                          name
                          id
                          color
                        }
                        pushedAt
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const [introRef, introVisible] = useInView();
  const [technologiesRef, technologiesVisible] = useInView();
  const [aboutRef, aboutVisible] = useInView();

  const visibleSection = React.useMemo(() => {
    if (aboutVisible) return "about";
    if (technologiesVisible) return "technologies";
    if (introVisible) return "intro";
  }, [introVisible, technologiesVisible, aboutVisible]);

  const getRepoByLanguage = React.useCallback(
    (lang) => {
      const repositories =
        allGithubData.edges[0].node.data.user.repositories.edges;

      return repositories.filter((repository) => {
        const repoLanguages = repository.node.languages.edges.map(
          (lang) => lang.node.name,
        );
        return repoLanguages.indexOf(lang) !== -1;
      });
    },
    [allGithubData],
  );

  const technologies = [
    {
      title: "C# / ASP.NET Core",
      lang: "C#",
      logo: aspNetCoreLogo,
    },
    {
      lang: "JavaScript",
      logo: nodeJsLogo,
    },
    {
      lang: "Python",
      logo: pythonLogo,
    },
    {
      lang: "TypeScript",
      logo: typescriptLogo,
    },
    {
      lang: "Vue",
      logo: vueLogo,
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron ref={introRef} profileImg={profileImg} />
      <div
        className={clsx("py-16", "px-8", "max-w-screen-xl", "mx-auto", "mb-16")}
        ref={technologiesRef}>
        <h2 className={clsx("text-3xl", "mb-8")}>Technologies</h2>
        {technologies.map(({ title, lang, logo }, index) => (
          <Technology
            logo={logo}
            title={title || lang}
            repositories={getRepoByLanguage(lang)}
            lang={lang}
            imgPos={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
      <div
        id="about"
        className={clsx(
          "pt-32",
          "pb-16",
          "px-8",
          "max-w-screen-xl",
          "mx-auto",
          "min-h-screen",
        )}
        ref={aboutRef}>
        <div className={clsx("flex")}>
          <div className={clsx("flex-1")}>
            <h2 className={clsx("text-3xl", "mb-2")}>About Me</h2>
            <div className={clsx("mb-6", "font-bold", "text-gray-400")}>
              <span className={clsx("text-navy-300")}>
                {Math.abs(
                  new Date(
                    Date.now() - new Date(2002, 9 - 1, 19),
                  ).getUTCFullYear() - 1970,
                )}{" "}
                years
              </span>
              <span className={clsx("mx-4")}>/</span>
            </div>
            <p>
              Motivated, engaged full stack web developer with a passion for
              software architecture and design. Always looking for new projects
              and currently working on the Jenyus IT start-up and its primary
              project{" "}
              <a
                className={clsx("underline", "text-navy-200")}
                target="_blank"
                href="https://github.com/Jenyus-Org">
                Recog
              </a>
              .
            </p>
          </div>
          <div className={clsx("flex-1")}></div>
        </div>
      </div>
      <IndicatorNav
        items={[
          { text: "Intro", id: "intro" },
          { text: "Technologies", id: "technologies" },
          { text: "About", id: "about" },
        ]}
        className={clsx("fixed", "right-0", "top-0", "bottom-0")}
        activeItemId={visibleSection}
      />
    </Layout>
  );
};

export default IndexPage;
