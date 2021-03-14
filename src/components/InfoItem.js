import React from "react"
import ReactMarkdown from "react-markdown"
import Logo from "../components/Logo"
import socials from "../constants/socials"
import { IoIosArrowDown } from "react-icons/io"

const InfoItem = ({
  designer,
  period,
  titolo,
  descrizione,
  slug,
  sold,
  modal,
  setShowInfo,
}) => {
  const [link, setLink] = React.useState(slug)
  React.useEffect(() => {
    if (typeof window !== undefined) {
      setLink(window.location.href)
    }
  }, [])

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
            href={`mailto:${socials.email}?subject=Enquire for the item ${slug}&body=Hello Robertaebasta London,%0D%0A%0D%0AI would like to enquire about the following piece: ${titolo} (link: ${link})%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0AI look forward to hearing from you.%0D%0A%0D%0AMany thanks`}
          >
            Enquire now
          </a>
          <div className="underline"></div>
        </button>
      </div>
      {modal && (
        <button
          className="submit switcher"
          onClick={() => {
            setShowInfo(false)
          }}
        >
          <IoIosArrowDown className="icon" />
        </button>
      )}
    </div>
  )
}

export default InfoItem
