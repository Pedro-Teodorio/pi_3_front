import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Ajuste na importação do Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import { SliderContainer } from './style';
import { Card } from './Card';

export const Slider = () => {
  return (
    <SliderContainer>
      {/* <ChevronLeft className="prev size-20  text-primary" /> */}
      <Swiper
        modules={[Navigation]}
        navigation= {true}
        slidesPerView={3}
        grabCursor={true}
      >
        {
            Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index}>
                    <Card />
                </SwiperSlide>
            ))
        }
        
      </Swiper>
      {/* <ChevronRight className="next size-20 text-primary" /> */}
    </SliderContainer>
  );
};
