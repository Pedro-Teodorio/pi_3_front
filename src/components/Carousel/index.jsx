import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Ajuste na importação do Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import Box from '../Box';
import { StyledButton } from './style';

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]} // Módulo de navegação correto
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex h-full w-8/12 justify-center"
    >
      <SwiperSlide className="flex w-full items-center justify-center">
        <Box>Turbine seu computador</Box>
      </SwiperSlide>
      <SwiperSlide className="flex w-full items-center justify-center">
        <Box>Conheça nossas promoções</Box>
      </SwiperSlide>
      <SwiperSlide className="flex w-full items-center justify-center">
        <Box>Black Friday</Box>
      </SwiperSlide>

      {/* Botões de navegação */}
      <StyledButton className="swiper-button-prev text-white"></StyledButton>
      <StyledButton className="swiper-button-next text-white"></StyledButton>
    </Swiper>
  );
}
