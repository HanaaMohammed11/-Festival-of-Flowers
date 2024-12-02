import { useState, useEffect } from 'react';
import Header from '../../Components/Home/Header/Header';
import PlantsSlider from '../../Components/Home/PlantSlider/PlantsSlider';
import Reviews from '../../Components/Home/Reviews/Reviews';
import Aboutus from '../../Components/Home/AboutSection/Aboutus';
import Offers from '../../Components/Home/offers/Offers';
import ToolsSlider from '../../Components/Home/ToolsSlider/ToolsSlider';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const nav=useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isPopupShown = localStorage.getItem('popupShown');
    if (!isPopupShown) {
      setShowPopup(true); 
      localStorage.setItem('popupShown', 'true'); 
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div style={popupStyle} className='bg-green-950/70' >
          <div style={popupContentStyle} className='font-cairo'>
            <h2 className='font-semibold text-xl text-[#375840]'> 🌟  اشترك الان</h2>
            <p className='mt-5'>قم بالاستفادة من باقاتنا الاشتراكية للاستمتاع بالمتابعه المستمر لنباتاتك تعرف الان علي عروضنا!</p>
            <div className='mt-7'>
            <button onClick={handleClosePopup} className='bg-[#c42222] text-white p-2 rounded-full text-sm hover:bg-[#375840b4] mr-4'>
              إغلاق
            </button>
            <button onClick={()=>{nav("/pricing")}} className='bg-[#375840] text-white p-2 rounded-full text-sm hover:bg-[#375840b4]'>
         رؤية الباقات
            </button>
            </div>
          
          </div>
        </div> 
      )}

      <Header />
      <Aboutus />
      <PlantsSlider />
      <Offers />
      <ToolsSlider />
      <Reviews />
    </div>
  );
}

// CSS Styles for Popup
const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  maxWidth: '400px',
  width: '100%',
};

