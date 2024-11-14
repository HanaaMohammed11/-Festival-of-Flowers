import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import slide_img from './../../assets/plant3.jpg';
import plant from '../../assets/plant2.jpg';
import plant2 from '../../assets/plant4.jpg';
import './PlantsSlider.modules.css';
import { Card } from 'flowbite-react';

export default function PlantsSlider() {
  return (
    <div className="plantscontainer text-center">
      <h1 className="section-heading">Our Plants</h1>
      <Swiper
        id="tranding"
        effect="coverflow"
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full max-w-4xl"
      >
        <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={slide_img} alt="Plant 1" />
            <p className="slide-title">Calathea Roseopicta</p>
            <p className="slide-price">$27</p>
          </Card>
        </SwiperSlide>   <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={slide_img} alt="Plant 1" />
            <p className="slide-title">Calathea Roseopicta</p>
            <p className="slide-price">$27</p>
          </Card>
        </SwiperSlide>   <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={slide_img} alt="Plant 1" />
            <p className="slide-title">Calathea Roseopicta</p>
            <p className="slide-price">$27</p>
          </Card>
        </SwiperSlide>   <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={slide_img} alt="Plant 1" />
            <p className="slide-title">Calathea Roseopicta</p>
            <p className="slide-price">$27</p>
          </Card>
        </SwiperSlide>   <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={slide_img} alt="Plant 1" />
            <p className="slide-title">Calathea Roseopicta</p>
            <p className="slide-price">$27</p>
          </Card>
        </SwiperSlide>   <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={slide_img} alt="Plant 1" />
            <p className="slide-title">Calathea Roseopicta</p>
            <p className="slide-price">$27</p>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={plant} alt="Plant 2" />
            <p className="slide-title">Cissus Rotundifolia</p>
            <p className="slide-price">$25</p>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="tranding-slide">
          <Card className="w-48">
            <img src={plant2} alt="Plant 3" />
            <p className="slide-title">Calathea Lancifolia</p>
            <p className="slide-price">$27</p>
          </Card>
        </SwiperSlide>

        <div className="tranding-slider-control">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
