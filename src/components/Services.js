import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import services from "../constants/services"
const History = () => {
  const { pic1 } = useStaticQuery(graphql`
    {
      pic1: file(relativePath: { eq: "services.jpg" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  const [index, setIndex] = useState(null)
  const filtering = (services, typeIndex) => {
    console.log("button", typeIndex)
    setIndex(typeIndex)
  }

  React.useEffect(() => {
    console.log("useState", index)
  }, [index])

  return (
    <div className="about-container serv">
      <div className="collection-title get-bigger">
        services
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            We value our services as much as our collection. This is the reason
            why we always aim to deliver superior-quality client service and to
            assist you throughout the pre-purchase and post-purchase process.
          </p>
        </article>
      </section>
      <section className="section1">
        <div className="services">
          {services.map((service, typeIndex) => {
            return (
              <div key={typeIndex}>
                <button
                  onClick={() => {
                    filtering(service, typeIndex)
                  }}
                  className={`subcategory-btn ${
                    index === typeIndex ? "btn-active" : ""
                  }`}
                >
                  {service.title}
                </button>
                {typeIndex === index ? (
                  <div className="serv-desc">{service.desc}</div>
                ) : null}
              </div>
            )
          })}
        </div>
        <div className="flex">
          <div className="service-pic">
            <Img
              className="img"
              fluid={pic1.c.f}
              alt="ROBERTAEBASTA history"
              backgroundColor="#b8d6d2"
              FadeIn={true}
              durationFadeIn={1000}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default History
