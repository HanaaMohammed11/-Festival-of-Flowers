import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import headerImg from "../../assets/bg-removebg-preview.png";
import hero from "./../../assets/hero2.png";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    const scrollAnimation = gsap.fromTo(
      ".hero-image",
      { y: 0, x: 0 },
      {
        y: 680,  
        x: -100,  
        scrollTrigger: {
          // trigger: ".about",
          start: "top bottom",
          end: "top center",
          scrub: true,
          onEnter: () => floatingAnimation.pause(),  
          onLeaveBack: () => floatingAnimation.resume(), 
        },
      }
    );

    const floatingAnimation = gsap.to(".hero-image", {
      y: "-=15",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    return () => {
      scrollAnimation.kill();
      floatingAnimation.kill();
    }; 
  }, []);

  return (
    <div className=''>
      <div>
   <div
  className="min-h-screen  flex flex-col items-center text-white justify-center animate-zoomBackground"
  style={{
    backgroundImage: ` linear-gradient( rgba(0, 18, 0,.4) ,rgba(34, 139, 34, 0.5)), url(${headerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  }}
>

<div className="flex flex-col sm:flex-row mx-auto bg-green-950/80 backdrop-blur-md items-center justify-center rounded-xl p-4 sm:p-8 lg:p-12 max-w-4xl lg:max-h-80 space-y-6 sm:space-y-0 sm:space-x-6">
  <img
    src={hero}
    alt="Hero"
    className="hero-image w-full sm:w-1/2 lg:max-w-sm -mt-32 sm:-mt-24 lg:-mt-32 filter "
    style={{ filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.9))" }}
  />
  <div className="text-center z-10 w-full sm:w-1/2 px-4">
    <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5">
    زيّن منزلك بالنباتات
    </h1>
    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
    اطلب الآن واحصل على أفضل النباتات لتزيين مساحتك.
    </p>
    <button className="bg-green-700 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base lg:text-lg">
    تسوق الآن
    </button>
  </div>
</div>

      </div>
     
</div>

    </div>
  );
}
