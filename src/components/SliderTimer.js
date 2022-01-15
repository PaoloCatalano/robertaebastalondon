import React, { useEffect } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Slider = ({ data: photos, alt }) => {
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > photos.length - 1) {
          index = 0
        }
        return index
      })
    }, 4000)
    return () => {
      clearInterval(slider)
    }
  }, [index, photos])

  return (
    <section className="slider">
      <div className="section-center">
        {photos.map((photo, photoIndex) => {
          let position = "nextSlide"
          if (photoIndex === index) {
            position = "activeSlide"
          }
          if (
            photoIndex === index - 1 ||
            (index === 0 && photoIndex === photos.length - 1)
          ) {
            position = "lastSlide"
          }

          return (
            <article className={`slide ${position}`} key={photoIndex}>
              <Link
                // className="zoom"
                to={`/collection/${photo.indirizzo}`}
              >
                <Img
                  className="img"
                  fluid={photo.foto.fluid}
                  alt={alt ? alt : "Robertaebasta London"}
                  backgroundColor="transparent"
                  style={{ height: "100%" }}
                />
              </Link>
            </article>
          )
        })}
      </div>
      <div className="dots-container">
        {photos.map((_, btnIndex) => {
          return (
            <span
              className="dot"
              key={btnIndex}
              style={index === btnIndex ? active : undefined}
            ></span>
          )
        })}
      </div>
    </section>
  )
}

const active = {
  backgroundColor: "#ffffff",
}

export default Slider
