exports.graphQLQuery = `#graphql
query ($user: String!, $reposFirst: Int!, $languagesFirst: Int!) {
  user(login: $user) {
    repositories(first: $reposFirst) {
      edges {
        node {
          name
          description
          url
          readme: object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
          languages(first: $languagesFirst) {
            edges {
              node {
                color
                id
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

exports.variables = {
  user: "Dan6erbond",
  reposFirst: 100,
  languagesFirst: 10,
};
