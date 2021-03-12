import React, { useState } from "react"
import Img from "gatsby-image"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const SingleFair = ({
  data: {
    fiera: { nodes },
  },
}) => {
  const fiera = nodes[0].fiera

  const [photos, setPhotos] = useState(nodes)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1
      if (index > photos.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1
      if (index < 0) {
        index = photos.length - 1
      }
      return index
    })
  }

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > photos.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index, photos])
  return (
    <div className="about-container">
      <div className="collection-title get-bigger">
        {fiera}
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            Robertaebasta London is pleased to share with you some of the images
            of our stands at the past editions of {fiera.toUpperCase()}
          </p>
        </article>
        <article className="fair-container">
          {/* SLIDER */}
          <section className="slider">
            <div className="section-center">
              {photos.length !== 1 && (
                <div className="slider-comandi">
                  <button className="prev" onClick={prevSlide}>
                    <IoIosArrowBack className="arrow" />
                  </button>
                  <div className="__separator"></div>
                  <button className="next" onClick={nextSlide}>
                    <IoIosArrowForward className="arrow" />
                  </button>
                </div>
              )}
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
                if (photos.length === 1) {
                  position = "activeSlide"
                }
                return (
                  <article className={`slide ${position}`} key={photoIndex}>
                    <Img
                      className="sliding-img"
                      fluid={photo.foto.fluid}
                      alt={photo.titolo + " | Robertaebasta London"}
                      backgroundColor="#ffffff"
                      FadeIn={true}
                      durationFadeIn={500}
                      style={{ height: "100%" }}
                    />
                    <p>{photo.titolo}</p>
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
          {/* END SLIDER */}
        </article>
      </section>
    </div>
  )
}
const active = {
  backgroundColor: "#ffffff",
}

export default SingleFair
