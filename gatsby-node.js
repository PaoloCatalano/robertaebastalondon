const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      items: allContentfulOggetto {
        nodes {
          slug: indirizzo
        }
      }
      articles: allContentfulArticle {
        nodes {
          slug: indirizzo
        }
      }
    }
  `)
  // OGGETTO page
  result.data.items.nodes.forEach(item => {
    createPage({
      path: `/collection/${item.slug}`,
      component: path.resolve(`src/templates/item-templates.js`),
      context: {
        slug: item.slug,
      },
    })
  })

  // ARTICOLO page
  result.data.articles.nodes.forEach(article => {
    createPage({
      path: `/about/press/${article.slug}`,
      component: path.resolve(`src/templates/article-templates.js`),
      context: {
        slug: article.slug,
      },
    })
  })
}
