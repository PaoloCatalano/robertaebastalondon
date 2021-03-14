import React from "react"
import AboutLayout from "../../components/AboutLayout"
import History from "../../components/History"

const ourHistory = () => {
  return (
    <AboutLayout
      title="Our History"
      description="Robertaebasta was established in Milan in 1967 by Roberta Tagliavini, a creative and talented woman with an endless love for objets d’art and timeless design pieces. Roberta has always sought to make a meaningful contribution to the world of art and culture. Her passion and eclectic taste are what defines Robertaebasta’s reputation as a point of reference for the Decorative Arts and Design of the 20th Century."
    >
      <History />
    </AboutLayout>
  )
}

export default ourHistory
