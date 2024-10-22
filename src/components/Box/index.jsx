import { BoxContainer } from './style';

import PropTypes from 'prop-types';

export default function Box({ children }) {
  return (
    <BoxContainer className="flex items-center justify-center text-white font-rubik text-head-lg">
      {children}
    </BoxContainer>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
