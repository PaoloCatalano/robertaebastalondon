import React from "react"
import ReactMarkdown from "react-markdown"
import Logo from "../components/Logo"
const InfoItem = ({ designer, period, titolo, descrizione, slug, sold }) => {
  return (
    <div className="item-info">
      <div style={{ zIndex: 90 }}>
        <Logo />
      </div>
      <div className="item-designer">
        <h1>{designer}</h1>
        <h2>{period}</h2>
      </div>
      <div className="item-desc">
        <p>{titolo}</p>
        <ReactMarkdown source={descrizione} />
        {sold && (
          <div className="sold-info">
            <p>sold</p>
          </div>
        )}
      </div>
      <div className="item-enquire">
        <button className="submit">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="item-a"
            href={`mailto:paolo12587@gmail.com?subject=Enquire for the item ${slug}&body=Link to the item: ${window.location.href}`}
          >
            Enquire now
          </a>
          <div className="underline"></div>
        </button>
      </div>
    </div>
  )
}

export default InfoItem
