import React, { useEffect, useRef, useState } from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Logo from "../components/Logo"
import Img from "gatsby-image"
import InfoItem from "../components/InfoItem"
import Slider from "../components/Slider"

const ItemTemplates = ({ data }) => {
  const {
    items: { nodes },
  } = data

  const {
    designer,
    titolo,
    period,
    descrizione: { descrizione },
    sold,
    fotoOggetto,
    slug,
    keywords,
  } = nodes[0]

  const alt = `${designer + ", " + titolo + ", " + keywords}`
  // switcher
  // const info = useRef(null)
  // const up = useRef(null)
  // const down = useRef(null)

  // const [isUp, setIsUp] = useState(null)

  // const switchUp = () => {
  //   setIsUp("10%")
  // }
  // const switchDown = () => {
  //   setIsUp("50%")
  // }

  // useEffect(() => {
  //   if (isUp === "10%") {
  //     up.current.style.display = "none"
  //     info.current.style.top = isUp
  //     down.current.style.display = "grid"
  //   }
  //   if (isUp === "50%") {
  //     up.current.style.display = "grid"
  //     info.current.style.top = isUp
  //     down.current.style.display = "none"
  //   }
  // }, [isUp])
  //-----------------------------------------------------------------
  //stile navbar
  const [showInfo, setShowInfo] = useState(false)
  const info = useRef(null)
  const section = useRef(null)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  useEffect(() => {
    const linksHeight = section.current.getBoundingClientRect().height

    if (showInfo) {
      info.current.style.height = `${linksHeight}px`
    } else {
      info.current.style.height = "0px"
    }
  }, [showInfo])
  const handleBack = () => {
    console.log("back")
    window.history.back()
  }

  return (
    <div className="single-object">
      <button
        className="submit"
        style={{ position: "absolute", zIndex: 99 }}
        onClick={handleBack}
      >
        BACK
      </button>
      <div className="item-pics">
        <Slider data={fotoOggetto} alt={alt} sold={sold} />
      </div>
      <div className="item-info-wide">
        <InfoItem
          designer={designer}
          period={period}
          titolo={titolo}
          descrizione={descrizione}
          slug={slug}
          sold={sold}
        />
      </div>
      <div className="item-info-mobile">
        <div ref={info} className="info-container">
          <div ref={section}>
            <InfoItem
              designer={designer}
              period={period}
              titolo={titolo}
              descrizione={descrizione}
              slug={slug}
              sold={sold}
            />
          </div>
        </div>
        <button className="submit switcher" onClick={toggleInfo}>
          {showInfo ? "less info" : "more info"}
        </button>
      </div>
    </div>
  )
}

export const query = graphql`
  query GetSingleItem($slug: String) {
    items: allContentfulOggetto(filter: { indirizzo: { eq: $slug } }) {
      nodes {
        designer
        titolo
        period: luogoData
        descrizione {
          descrizione
        }
        sold
        fotoOggetto {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        slug: indirizzo
        keywords
      }
    }
  }
`
// sold
export default ItemTemplates
