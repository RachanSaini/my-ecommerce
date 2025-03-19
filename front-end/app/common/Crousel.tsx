"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

interface CarouselProps {
  items: {
    id: number;
    image: string;
    title?: string;
    description?: string;
  }[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplayDelay?: number;
  showNavigation?: boolean;
}

const Carousel = ({
  items,
  slidesPerView = 3,
  spaceBetween = 30,
  autoplayDelay = 2500,
  showNavigation = true,
}: CarouselProps) => {
  return (
    <div className="mt-4">
      <Swiper
        navigation={showNavigation}
        modules={[Navigation, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: slidesPerView,
          },
        }}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-72 overflow-hidden rounded-lg shadow-lg group">
              <img
                src={item.image}
                alt={item.title || 'Carousel Item'}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              {(item.title || item.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                  {item.title && <h3 className="text-lg font-semibold">{item.title}</h3>}
                  {item.description && <p className="text-sm">{item.description}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
