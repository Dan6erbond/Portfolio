import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import Layout from "../components/layout";
import Jumbotron from "../components/pages/index/jumbotron";
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

  const languages = React.useMemo(() => {
    const repositories =
      allGithubData.edges[0].node.data.user.repositories.edges;
    const languages = [];

    for (const repository of repositories) {
      const repoLanguages = repository.node.languages.edges.map(
        (lang) => lang.node.name,
      );
      const uniqueLanguages = repoLanguages.filter(
        (lang) => languages.indexOf(lang) === -1,
      );
      languages.push(...uniqueLanguages);
    }

    return languages;
  }, [allGithubData]);

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

  const getRepoByPrimaryLanguage = React.useCallback(
    (lang) => {
      const repositories =
        allGithubData.edges[0].node.data.user.repositories.edges;

      return repositories.filter(
        (repository) => repository.node.primaryLanguage?.name === lang,
      );
    },
    [allGithubData],
  );

  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron profileImg={profileImg} />
      <div className={clsx("py-16", "px-8")}>
        <h2 className={clsx("text-3xl", "mb-8")}>Technologies</h2>
        <Technology
          logo={aspNetCoreLogo}
          title="C# / ASP.NET Core"
          repositories={getRepoByLanguage("C#")}
          lang="C#"
        />
        <Technology
          logo={nodeJsLogo}
          title="Javascript"
          repositories={getRepoByLanguage("JavaScript")}
          lang="JavaScript"
          imgPos="right"
        />
        <Technology
          logo={pythonLogo}
          title="Python"
          repositories={getRepoByLanguage("Python")}
          lang="Python"
        />
        <Technology
          logo={typescriptLogo}
          title="Typescript"
          repositories={getRepoByLanguage("TypeScript")}
          lang="TypeScript"
          imgPos="right"
        />
        <Technology
          logo={vueLogo}
          title="Vue"
          repositories={getRepoByLanguage("Vue")}
          lang="Vue"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
