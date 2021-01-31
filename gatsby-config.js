require("dotenv").config();

const { graphQLQuery, variables } = require("./github-api");

module.exports = {
  siteMetadata: {
    title: "RaviAnand Mohabir",
    description:
      "Full-stack engineer working on the Jenyus IT start-up and Recog forum.",
    author: "RaviAnand Mohabir",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "RaviAnand Mohabir",
        short_name: "Portfolio",
        description:
          "Full-stack engineer working on the Jenyus IT start-up and Recog forum.",
        lang: "en",
        start_url: "/",
        background_color: "#0F0E18",
        theme_color: "#f97316",
        display: "minimal-ui",
        icon: "src/images/logo_navy.svg",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDrpc4GcICkLiTFmxkdUr_m3B7gHc3DLX0",
          authDomain: "ravi-180905.firebaseapp.com",
          databaseURL: "https://ravi-180905.firebaseio.com",
          projectId: "ravi-180905",
          storageBucket: "ravi-180905.appspot.com",
          messagingSenderId: "276164819903",
          appId: "1:276164819903:web:86d609df09653e6650bf0a",
          measurementId: "G-2G5ETB38GK",
        },
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        graphQLQuery,
        variables,
        token: process.env.GITHUB_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
