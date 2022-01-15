import React from "react"
import Slider from "./Slider"

const SingleArticle = ({ title, desc: { desc }, pagineArticolo, date }) => {
  return (
    <div className="about-container">
      <div className="collection-title get-bigger">
        {title}
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>{desc && <p>{desc}</p>}</article>
        <article className="fair-container article-container">
          <Slider data={pagineArticolo} alt={title + " - " + date} />
          <div className="mini-space"></div>
          <p>{date}</p>
        </article>
      </section>
    </div>
  )
}

export default SingleArticle
