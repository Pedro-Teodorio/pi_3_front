import styled from 'styled-components';

export const SliderContainer = styled.div`
 
  width: 100%;
 
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color :#34C9FF;
    font-size: 2rem;
  }
`;

export const SectionProductsContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    
    padding: 1rem ;
`;
