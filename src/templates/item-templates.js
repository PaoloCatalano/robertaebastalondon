import React, { useEffect, useRef, useState } from "react"
import { graphql } from "gatsby"
import Logo from "../components/Logo"
import InfoItem from "../components/InfoItem"
import Slider from "../components/Slider"
import { HiOutlineXCircle } from "react-icons/hi"
import { IoIosArrowUp } from "react-icons/io"
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

  //-----------------------------------------------------------------
  //stile navbar
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  // useEffect(() => {
  //   if (showInfo) {
  //     info.current.style.display = "block"
  //   } else {
  //     info.current.style.display = "none"
  //   }
  // }, [showInfo])

  const handleBack = () => {
    if (window.history.state === null) {
      window.location.replace("/collection/")
    } else {
      window.history.back()
    }
  }

  return (
    <div className="single-object">
      <button className="submit close-item" onClick={handleBack}>
        <HiOutlineXCircle />
      </button>
      <div className="show-logo">
        <Logo />
      </div>
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
      <div className={`info-modal ${showInfo ? "" : "hide"}`}>
        <InfoItem
          designer={designer}
          period={period}
          titolo={titolo}
          descrizione={descrizione}
          slug={slug}
          sold={sold}
          modal
          setShowInfo={setShowInfo}
        />
      </div>
      <div className={`item-info-mobile ${showInfo ? "hiding" : ""}`}>
        <button
          // className="submit switcher"
          className={`submit switcher ${showInfo ? "icon-down" : ""}`}
          onClick={() => {
            setShowInfo(true)
          }}
        >
          <IoIosArrowUp className={`icon ${showInfo ? "rotate" : ""}`} />
        </button>
        <div className="info-des-tit">
          <div>{designer}</div>
          <p>{titolo}</p>
        </div>
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
          fluid(maxWidth: 4000, quality: 100) {
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
