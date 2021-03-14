require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: "Robertaebasta London",
    titleTemplate: "Robertaebasta London · %s",
    description:
      "Located in a beautiful Georgian building on Pimlico Road, London’s Design mecca, Robertaebasta London was established in September 2017. The gallery sits in a unique context, where design and antiques blend in together. Nicknamed by Sotheby’s “the new kids on the block”, the gallery's ethos perfectly embraces the cosmopolitan nature of the city.",
    url: "https://robertaebasta-prova.netlify.app",
    image: "/img.jpg",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
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
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
