import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const GridPics = ({ products }) => {
  return (
    <ul className="grid-pics">
      {products.map((prod, index) => {
        // const title = prod.title.replaceAll(" ", "-").replaceAll(",", "")
        const {
          slug,
          fotoAnteprima: { fluid },
          sold,
          designer,
          titolo,
        } = prod

        return (
          <li key={index} className="grid-pic">
            <Link
              to={`/collection/${slug}`}
              alt={slug}
              className={`${sold ? "sold" : ""}`}
            >
              <Img
                fluid={fluid}
                alt=""
                className="preview"
                backgroundColor="#b8d6d2"
                FadeIn={true}
                durationFadeIn={2000}
              />
              {!sold && (
                <div className="preview-info">
                  <div>{designer}</div>
                  <p>{titolo}</p>
                </div>
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default GridPics
