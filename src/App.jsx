

import './App.css'
import Banner from './compon/banner/Baner'
// import StatsSection from './compon/StatsSection/statssection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import GetStartedSection from './components/GetStartedSection'
import MainSection from './components/MainSection'
import Navbar from './components/navbar/Navbar'
import StatsSection from './components/StatsSection'
// import Banner from './components/banner'
import Header from './components/navbar/Navbar'
import PricingSection from './components/PricingSection'

import { Banana } from 'lucide-react'
// import banner from './components/banner'





function App() {
  
 

  return (
    <>
     
      <Navbar />
      <Banner></Banner>
      
       <StatsSection></StatsSection>
       <MainSection></MainSection>
       <GetStartedSection></GetStartedSection>
       <PricingSection></PricingSection>
       <CTASection></CTASection>
       <Footer></Footer>
     
     </>
  )
}

export default App










