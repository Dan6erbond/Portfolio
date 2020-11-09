module.exports = {
  siteMetadata: {
    title: `RaviAnand Mohabir | Portfolio`,
    description: `Full-stack engineer working on his own start-up and learning countless Javascript libraries in his free-time.`,
    author: `RaviAnand Mohabir`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RaviAnand Mohabir | Portfolio`,
        short_name: `Developer Portfolio`,
        start_url: `/`,
        background_color: `#444444`,
        theme_color: `#409982`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
