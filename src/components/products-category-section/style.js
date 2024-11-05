import styled from 'styled-components';

export const SliderContainer = styled.div`
  box-sizing: border-box;
  width: 80vw;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: #34c9ff;
    font-size: 2rem;
  }
`;

export const SectionProductsContainer = styled.div`
  box-sizing: border-box;
  width: 80vw;

  padding: 1rem;
`;
