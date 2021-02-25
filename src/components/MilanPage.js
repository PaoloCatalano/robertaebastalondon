import React from "react"
import galleries from "../constants/galleries"
const MilanPage = () => {
  return (
    <div className="about-container">
      <div className="collection-title">
        the milan galleries
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            In the very heart of Milan, the renowned Brera Design District,
            Robertaebasta welcomes you into its Art Deco and Design galleries.
            These spaces perfectly frame the wonderful and meticulous display of
            Robertaebasta’s vast collection. If you wish to visit one of our
            Milanese galleries, please find all the details below:
          </p>
        </article>
        <article className="gal-container">
          {galleries.map((gallery, index) => {
            return (
              <div className="single-gal" key={index}>
                <div className="collection-title">
                  {gallery.title}
                  <div className="underline"></div>
                </div>
                {gallery.info}
              </div>
            )
          })}
        </article>
      </section>
    </div>
  )
}

export default MilanPage
