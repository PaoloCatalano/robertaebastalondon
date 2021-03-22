require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: "Robertaebasta London",
    titleTemplate: "Robertaebasta London · %s",
    description:
      "Robertaebasta London, a 20th century art and design gallery based in Pimlico Road, London.",
    url: "https://www.robertaebasta.co.uk",
    siteUrl: "https://www.robertaebasta.co.uk",
    image: "/img-ret.jpg",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cjnsrdbkkqe6`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
