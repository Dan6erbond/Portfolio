import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import IndicatorNav from "../components/indicator-nav";
import Layout from "../components/layout";
import AboutCard from "../components/pages/index/about-card";
import Jumbotron from "../components/pages/index/jumbotron";
import Technology from "../components/pages/index/technology";
import SEO from "../components/seo";
import AlteKantiAarauLogo from "../images/alte_kanti_aarau_logo.svg";
import JenyusLogo from "../images/jenyus_logo.svg";
import RecogLogo from "../images/recog_logo.svg";

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
      query IndexPageQuery {
        profileImg: file(relativePath: { eq: "ravi_1.png" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
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
      proficiency: 4,
      description:
        "C# strikes the ideal balance for backend projects and APIs with high-speed requirements and an organized project structure, making it very easy to combine with a choice of frontend frameworks such as React or Vue.",
    },
    {
      lang: "JavaScript",
      logo: nodeJsLogo,
      proficiency: 5,
      description:
        "NodeJS presents itself as an opportunity for me to focus on the functionality of an application and let my host as well as the underlying frameworks take care of the details. Real-time applications are a breeze with this language and it provides the foundation for frontend applications as well.",
    },
    {
      lang: "Python",
      logo: pythonLogo,
      proficiency: 4,
      description:
        "I've used Python in many projects, from automation to machine learning, as well as implementing RESTful APIs to connect my web apps to. The well-structured syntax and good selection of frameworks enable rapid development of modern applications.",
    },
    {
      lang: "TypeScript",
      logo: typescriptLogo,
      proficiency: 5,
      description:
        "Recog and projects like it require more structure and type-safety than languages like Javascript and Python provide, which is why I've chosen to use it in all my larger-scale projects to ensure a well structured and thought-out codebase.",
    },
    {
      lang: "Vue",
      logo: vueLogo,
      proficiency: 5,
      description:
        "Vue is a fantastic alternative to React, and one I enjoy using for smaller projects as it handles a lot of things for me. Landing pages and small hobby projects have been a breeze with this modern frontend framework.",
    },
  ];

  return (
    <Layout>
      <SEO title="Home">
        <meta
          name="google-site-verification"
          content="kb9qYniy2sZcwMZfvr9Xrbs9BNusM68PDtkue0HRs4w"
        />
      </SEO>
      <Jumbotron ref={introRef} profileImg={profileImg} />
      <div
        className={clsx(
          "py-16",
          "px-2",
          "md:px-8",
          "max-w-screen-xl",
          "mx-auto",
          "mb-16",
        )}
        ref={technologiesRef}>
        <h2 className={clsx("text-3xl", "mb-8")}>Technologies</h2>
        {technologies.map(
          ({ title, lang, logo, proficiency, description }, index) => (
            <Technology
              logo={logo}
              title={title || lang}
              repositories={getRepoByLanguage(lang)}
              lang={lang}
              imgPos={index % 2 === 0 ? "right" : "left"}
              proficiency={proficiency}
              description={description}
            />
          ),
        )}
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
        <div className={clsx("flex", "flex-col", "md:flex-row")}>
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
              <span className={clsx("text-navy-300")}>Associate's Degree</span>
            </div>
            <p>
              My name is RaviAnand Mohabir. I'm a fullstack developer &
              freelancer in Switzerland. I'm passionate about technology and
              media and pretty much anything that runs this digital world.
              <br />
              <br />I am currently a fullstack junior developer at BlueMouse
              GmbH and the founder of Jenyus Org, working on{" "}
              <a
                className={clsx("underline", "text-navy-200")}
                target="_blank"
                href="https://github.com/Jenyus-Org">
                Recog
              </a>
              . I also maintain a couple of open-source projects and am always
              learning new technologies & frameworks.
              <br />
              <br />
              For fullstack development I focus on technologies that create the
              best experience for the users and the developer. I started using
              React & Vue in the frontend to build out many of my projects, and
              primarily use NodeJS in the backend. This stack allows me to build
              rich user experiences rapidly and make projects maintainable. This
              site is built on top of the Gatsby framework using React &
              Javascript.
              <br />
              <br />
              I'm always looking for new projects to work on - if you're a small
              business owner looking for a landing page, internal management
              tool or the sorts, or just want to get in touch, feel free to
              reach out and let's chat.
            </p>
          </div>
          <div className={clsx("flex-1")}>
            <div
              className={clsx(
                "h-full",
                "grid",
                "grid-cols-1",
                "md:grid-cols-2",
                "gap-8",
                "py-8",
                "px-4",
                "md:px-16",
              )}>
              <AboutCard
                text="Graduate of"
                title="Alte Kanti Aarau"
                url="http://altekanti.ch/"
                style={{
                  backgroundImage: `url(${AlteKantiAarauLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              />
              <AboutCard
                text="CTO of"
                title="Jenyus Org"
                url="https://jenyus.web.app/"
                style={{
                  backgroundImage: `url(${JenyusLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              />
              <AboutCard
                text="Developer of"
                title="Recog"
                linkText="GitHub Repository"
                url="https://github.com/Jenyus-Org/recog"
                style={{
                  backgroundImage: `url(${RecogLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              />
              <AboutCard
                text="Creator of"
                title="Banhammer"
                linkText="GitHub Repository"
                url="https://github.com/Dan6erbond/Banhammer.py"
              />
            </div>
          </div>
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
        activeItemId={visibleSection}
        breakpoint="lg"
      />
    </Layout>
  );
};

export default IndexPage;
