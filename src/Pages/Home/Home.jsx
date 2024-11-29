
import Header from '../../Components/Home/Header/Header'
import PlantsSlider from '../../Components/Home/PlantSlider/PlantsSlider'
import Reviews from '../../Components/Home/Reviews/Reviews'
import Aboutus from '../../Components/Home/AboutSection/Aboutus'
import Offers from '../../Components/Home/offers/Offers'
import ToolsSlider from '../../Components/Home/ToolsSlider/ToolsSlider'

export default function Home() {
  return (
    <div>
     
    <Header/>
    <Aboutus/>


    <PlantsSlider/>
    <Offers/>
    <ToolsSlider/>
    <Reviews/>



    </div>
  )
}
