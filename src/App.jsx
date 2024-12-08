import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import Plants from './Pages/plants/Plants';
import NavBar from './Components/Nav/NavBar';
import Footer from './Components/Footer/Footer';
import Detilesplant from './Pages/detiles/Detilesplant';
import Cart from './Pages/cart/Cart';
import Loader from './Components/LOADERS/Loader';
import Tools from './Pages/Tools/Tools';
import Pricing from './Pages/Pricing/Pricing';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Dashboard from './Pages/Dashboard/Dashboard';
import OrderDetails from './Components/Dashboard/Orders/OrderDetails';
import Billing from './Components/billing/Billing'
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
     {isLoading ? (
        <Loader />
      ) : (
        <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/plants' element={<Plants />}/>
      <Route path='/detiles' element={<Detilesplant />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/tools' element={<Tools/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/order" element={<OrderDetails />} />
      <Route path="/billing" element={<Billing />} />





    </Routes>
    <Footer/>
    </div>
      )}
    </>
  )
}

export default App;
