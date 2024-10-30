import PropTypes from 'prop-types';
import { ButtonComponent } from './style';

export default function Button({ children }) {
  return <ButtonComponent className="font-inter">{children}</ButtonComponent>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
