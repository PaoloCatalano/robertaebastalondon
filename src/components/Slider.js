import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const Slider = ({ data, alt, sold }) => {
  const [photos, setPhotos] = useState(data)
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

  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setIndex(oldIndex => {
  //         let index = oldIndex + 1
  //         if (index > photos.length - 1) {
  //           index = 0
  //         }
  //         return index
  //       })
  //     }, 7000)
  //     return () => {
  //       clearInterval(slider)
  //     }
  //   }, [index, photos])

  return (
    <section className="slider">
      <div className="section-center">
        <div className="slider-comandi">
          <button className="prev" onClick={prevSlide}>
            <IoIosArrowBack className="arrow" />
          </button>
          <div></div>
          <button className="next" onClick={nextSlide}>
            <IoIosArrowForward className="arrow" />
          </button>
        </div>
        {/* </div> */}

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
              <Img
                className="sliding-img"
                fluid={photo.fluid}
                alt={alt}
                backgroundColor="#ffffff"
                FadeIn={true}
                durationFadeIn={2000}
                style={{ height: "100%" }}
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Slider
