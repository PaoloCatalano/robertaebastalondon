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
    }
  `)
  result.data.items.nodes.forEach(item => {
    createPage({
      path: `/collection/${item.slug}`,
      component: path.resolve(`src/templates/item-templates.js`),
      context: {
        slug: item.slug,
      },
    })
  })
}
