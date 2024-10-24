import { BoxContainer } from './style';
import PropTypes from 'prop-types';

export default function CarouselBox({ children }) {
  return <BoxContainer className="carousel-box">{children}</BoxContainer>;
}

CarouselBox.propTypes = {
  children: PropTypes.node.isRequired,
};
