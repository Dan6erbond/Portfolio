require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
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
  ],
};
