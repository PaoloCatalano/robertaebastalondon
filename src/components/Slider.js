import React from "react"
import Img from "gatsby-image"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const Slider = ({ data: photos, alt }) => {
  // eslint-disable-next-line
  // const [photos, setPhotos] = useState(data)
  // const photos = data
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

  return (
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
          if (photos.length === 1) {
            position = "activeSlide"
          }
          return (
            <article className={`slide ${position}`} key={photoIndex}>
              <a
                className="zoom"
                target="_blank"
                rel="noopener noreferrer"
                href={photo.fluid.src}
              >
                {/* <button className=" submit">
                  <AiOutlineZoomIn />
                </button> */}
                <Img
                  className="sliding-img"
                  fluid={photo.fluid}
                  alt={alt ? alt : "Robertaebasta London"}
                  backgroundColor="#ffffff"
                  FadeIn={true}
                  durationFadeIn={500}
                  style={{ height: "100%" }}
                />
              </a>
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
              // onClick={() => setIndex(btnIndex) }
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
