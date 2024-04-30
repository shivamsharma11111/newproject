import React from 'react'
import HomeHeader from '../Components/HomeHeader'
import HomeAbout from '../Components/HomeAbout' 
import CommercialDevelopment from '../Components/CommercialDevelopment'
import OurProjects from '../Components/OurProjects'
import IntoTheFuture from '../Components/IntoTheFuture'
import FillTheForm from '../Components/FillTheForm'
import Development from '../Components/Development'
import Offering from '../Components/Offering'
const Home = () => {
  return (
    <>
     

      <HomeHeader />
      <HomeAbout />
      <Offering /> 
      <Development /> 
      <CommercialDevelopment/> 
      <FillTheForm /> 
      <IntoTheFuture /> 
      <OurProjects />
    </>
  )
}

export default Home
