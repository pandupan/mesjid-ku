import ContactUsHome from '@/components/pages/HomePageT1/ContactUsHome'
import HeroSectionHP from '@/components/pages/HomePageT1/HeroSectionHP'
import HistoryOfCenter from '@/components/pages/HomePageT1/HistoryOfCenter'
import NamazTimings from '@/components/pages/HomePageT1/NamazTimings'
import OurGallery from '@/components/pages/HomePageT1/OurGallery'
import PillarsOfIslam from '@/components/pages/HomePageT1/PillarsOfIslam'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionHP/>
      <NamazTimings/>
      <HistoryOfCenter/>
      <PillarsOfIslam/>
      <OurGallery/>
      <ContactUsHome/>
    </div>
  )
}

export default page
