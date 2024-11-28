import PropTypes from 'prop-types';
import { tv } from 'tailwind-variants';

const input = tv({
  base: 'flex  items-center gap-2 rounded-xl px-4 border focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-opacity-50',
  variants: {
    mode: {
      dark: 'bg-neutral-950 text-neutral-50',
      light: 'bg-neutral-50 text-neutral-900 ',
    },
    dark: {
      true: 'bg-neutral-950 text-neutral-50',
    },
  },
  defaultVariants: {
    mode: 'light',
  },
});

export const InputRoot = ({ children, width, height, mode }) => {
  return (
    <div className={`${input({ mode })} ${width} ${height}`}>{children}</div>
  );
};

InputRoot.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
};
