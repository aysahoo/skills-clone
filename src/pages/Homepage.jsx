import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Badges from '../components/Badges'
import Folder from '../components/Folder'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Timeline />
    <Badges />
    <Folder />
    <Faq />
    <Footer />
    </>
  )
}

export default Homepage
