import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Badges from '../components/Badges'
import Folder from '../components/Folder'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='' id='homepage'>
    <Navbar />
    <Hero />
    <Timeline />
    <Badges />
    <Folder />
    <Faq />
    <Footer />
    </div>
  )
}

export default Homepage
