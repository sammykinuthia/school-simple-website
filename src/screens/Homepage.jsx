import React from 'react'
import NavBar from '../components/NavBar'
import CallToActionSections from '../components/CallToActionSections'
import VideoSection from '../components/VideoSection'
import Courses from '../components/Courses'
import ClientSection from '../components/ClientSection'
import Experts from '../components/Experts'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <NavBar/>
    <CallToActionSections/>
    <VideoSection/>
    <Courses/>
    <ClientSection/>
    <Experts/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Homepage