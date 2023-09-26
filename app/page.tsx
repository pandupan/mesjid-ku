import AboutUs from '@/components/pages/LandingPage/AboutUs'
import HeroSectionLP from '@/components/pages/LandingPage/HeroSectionLP'
import SelectTheme from '@/components/pages/LandingPage/SelectTheme'
import Image from 'next/image'

export default function Home() {
  return (
   <>
    <HeroSectionLP/>
    <SelectTheme/>
    <AboutUs/>
   </>
  )
}
