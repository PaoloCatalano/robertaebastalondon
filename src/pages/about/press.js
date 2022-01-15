import React from "react"
import AboutLayout from "../../components/AboutLayout"
import Press from "../../components/Press"

const PressPage = () => {
  return (
    <AboutLayout
      title="Press"
      description="Robertaebasta London is regularly featured on some of the most exclusive magazines about design and architecture. Here you can find a selection of the latest editorials and articles."
    >
      <Press />
    </AboutLayout>
  )
}

export default PressPage
