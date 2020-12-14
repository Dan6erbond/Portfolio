import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const RepositoryPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const repositories =
    data.allGithubData.edges[0].node.data.user.repositories.edges;
  const languages = [];

  for (const repository of repositories) {
    const repoLanguages = repository.node.languages.edges.map(
      lang => lang.node.name,
    );
    const uniqueLanguages = repoLanguages.filter(
      lang => languages.indexOf(lang) === -1,
    );
    languages.push(...uniqueLanguages);
  }

  const getRepoByLanguage = lang => {
    return repositories.filter(repository => {
      const repoLanguages = repository.node.languages.edges.map(
        lang => lang.node.name,
      );
      return repoLanguages.indexOf(lang) !== -1;
    });
  };

  return (
    <Layout>
      <SEO title="GitHub Repositories" />
      <div className="container">
        <div className="row pb-3">
          <h3>Repositories by Language</h3>
        </div>
        <div className="row">
          {languages.map(lang => (
            <div className="pb-3 pr-3 col-4">
              <div key={lang} className="card h-100">
                <div className="card-header">{lang}</div>
                <div className="card-content">
                  <ul>
                    {getRepoByLanguage(lang).map(repo => (
                      <li>{repo.node.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RepositoryPage;
