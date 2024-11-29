import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import Plants from './Pages/plants/Plants';
import NavBar from './Components/Nav/NavBar';
import Footer from './Components/Footer/Footer';
import Detilesplant from './Pages/detiles/Detilesplant';
import Cart from './Pages/cart/Cart';
import Loader from './Components/LOADERS/Intro';
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
    </Routes>
    <Footer/>
    </div>
      )}
    </>
  )
}

export default App;
