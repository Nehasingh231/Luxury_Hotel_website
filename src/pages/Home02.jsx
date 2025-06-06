import React from 'react'
import HeroSection02 from '../components/HeroSection02'
import RoomChoices from '../components/RoomChoices'
import ClientReview from '../components/ClientReview'
import ExpertTeam from '../components/ExpertTeam'
import LatestNewsUpdate from '../components/LatestNewsUpdate'
import Offer from '../components/Offer.jsx'
import Footer from '../components/Footer.jsx'
import LuxuryHotelAboutSection from '../components/LuxuryHotelAboutSection.jsx'

function Home02() {
  return (
    <>
     <HeroSection02 />
     <LuxuryHotelAboutSection />
     <RoomChoices />
     <ClientReview />
     <ExpertTeam />
     <LatestNewsUpdate />
     <Offer />
     <Footer />
    </>
  )
}

export default Home02