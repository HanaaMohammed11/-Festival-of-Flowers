import React from 'react'
import NavBar from '../../Components/Nav/NavBar'
import Header from '../../Components/Home/Header/Header'
import PlantsSlider from '../../Components/Home/PlantSlider/PlantsSlider'
import Reviews from '../../Components/Home/Reviews/Reviews'
import Footer from '../../Components/Footer/Footer'
import FeaturesCards from '../../Components/Home/features/FeaturesCards'
import Aboutus from '../../Components/Home/AboutSection/Aboutus'
import PlantBasedButton from '../../Components/LOADERS/Intro'
import Offers from '../../Components/Home/offers/Offers'

export default function Home() {
  return (
    <div>
     
    <Header/>
    <Aboutus/>


    <PlantsSlider/>
    <Offers/>
    <Reviews/>
 {/* <PlantBasedButton/> */}

    </div>
  )
}
