module.exports = {
  siteMetadata: {
    title: `RaviAnand Mohabir`,
    description: `Full-stack engineer working on the Jenyus IT start-up and learning countless Javascript libraries in his free-time.`,
    author: `RaviAnand Mohabir`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RaviAnand Mohabir`,
        short_name: `Portfolio`,
        description: `Full-stack engineer working on the Jenyus IT start-up and learning countless Javascript libraries in his free-time.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#444444`,
        theme_color: `#409982`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    "gatsby-plugin-react-svg",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
