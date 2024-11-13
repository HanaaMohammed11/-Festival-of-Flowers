import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import headerImg from "../../assets/bg-removebg-preview.png";
import hero from "./../../assets/hero2.png";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-image",
      { y: 0, x: 0 },
      {
        y: 700,  
        x: 500,  
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
    gsap.to(".hero-image", {
      repeat: -1, 
      yoyo: true, 
      duration: 3, 
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div>
      <div
        className="min-h-screen flex flex-col items-center text-white justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${headerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col md:flex-row bg-green-950/80 backdrop-blur-md items-center justify-center rounded-xl p-4 md:p-8 lg:p-12 max-w-4xl w-full mx-4 lg:max-h-80 space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={hero}
            alt="Hero"
            className="hero-image w-full md:w-1/2 lg:-mt-52 -mt-32 md:-mt-24 filter"
            style={{ filter: "drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.9))" }}
          />
          <div className="text-center z-10 w-full md:w-1/2 px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Decorate your Home with Plants</h1>
            <p className="text-sm md:text-base mb-4 md:mb-6">
              Place your order with us and get the best plants delivered to decorate your space.
            </p>
            <button className="bg-green-700 text-white px-4 md:px-6 py-2 rounded-full hover:bg-green-600 text-sm md:text-base">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="about flex flex-col md:flex-row mx-9 mt-20">
        <div className="flex flex-col md:flex-row rounded-xl p-4 md:p-8 lg:p-12 w-full mx-4 lg:max-h-80 space-y-4 md:space-y-0 md:space-x-6">
          <div className="z-10 w-full md:w-1/2 px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Decorate your Home with Plants</h1>
            <p className="text-sm md:text-base mb-4 md:mb-6">
              Place your order with us and get the best plants delivered to decorate your space.
              Place your order with us and get the best plants delivered to decorate your space.
              Place your order with us and get the best plants delivered to decorate your space.
              Place your order with us and get the best plants delivered to decorate your space.    
              Place your order with us and get the best plants delivered to decorate your space.
            </p>
            <button className="bg-green-700 text-white px-4 md:px-6 py-2 rounded-full hover:bg-green-600 text-sm md:text-base">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
