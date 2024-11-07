import headerImg from "../../assets/header.jpg";
import hero from "./../../assets/plant3.jpg";
import plant from "../../assets/plant2.jpg"
import plant2 from "../../assets/plant4.jpg"


export default function Header() {
  return (
<div
  className="bg-green-900 min-h-screen flex flex-col items-center text-white"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
      {/* Hero Section with Text and Button */}
      <div className="relative w-full max-w-5xl bg-green-800 p-8 rounded-lg mt-8 overflow-hidden justify-between">
        <div className="flex flex-col justify-between md:flex-row items-center">
          <div className="flex-1 text-left z-10">
            <h1 className="text-4xl font-bold mb-4">Decorate your Home with Plants</h1>
            <p className="mb-6">Place your order with us and get the best plants delivered to decorate your space.</p>
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-600">
              Shop Now
            </button>
          </div>
          
          {/* Collage of Curved Images */}
          <div className="flex-1 mt-8 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="relative">
    {/* الصورة الكبيرة */}
    <img
      src={plant}
      alt="Plant 1"
      className="rounded-t-full w-full h-72 object-cover"
    />
    
    <img
      src={plant2}
      alt="Plant 2"
      className="rounded-full w-20 h-20 object-cover absolute top-1/2 -right-12 md:top-40 md:-right-20 lg:w-24 lg:h-24 lg:top-48 lg:-right-14"
    />
    
    <img
      src={hero}
      alt="Plant 3"
      className="rounded-full w-16 h-16 object-cover absolute top-2/3 -right-20 md:top-52 md:-right-44 lg:w-20 lg:h-20 lg:top-60 lg:-right-20"
    />
  </div>
</div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-green-300">
        <div>
          <p className="text-4xl font-bold">2400+</p>
          <p>Varieties</p>
        </div>
        <div>
          <p className="text-4xl font-bold">4600+</p>
          <p>Happy Customers</p>
        </div>
        <div>
          <p className="text-4xl font-bold">300+</p>
          <p>Staff Members</p>
        </div>
      </div>
    </div>
  );
}
