import { BoxContainer } from './style';

import PropTypes from 'prop-types';

export default function Box({ children }) {
  return (
    <BoxContainer className="flex items-center justify-center font-rubik text-head-lg text-white">
      {children}
    </BoxContainer>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
