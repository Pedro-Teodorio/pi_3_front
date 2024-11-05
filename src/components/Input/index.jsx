import { CircleHelp } from 'lucide-react';
import PropTypes from 'prop-types';

export const Input = ({
  placeholder,
  icon,
  iconPosition,
  sizeHeight,
  type,
  variant,
}) => {
  const baseClasses = `flex-1 h-${sizeHeight} bg-transparent outline-none`;
  const variantClasses =
    variant === 'dark'
      ? 'bg-neutral-900 text-neutral-50 placeholder-neutral-400'
      : 'bg-neutral-50 text-neutral-900 placeholder-neutral-400';
  return (
    <div
      className={`mx-auto flex w-3/6 flex-1 items-center gap-2 rounded-lg px-4 py-1 ${variantClasses} `}
    >
      {icon && iconPosition === 'left' && icon}

      <input type={type} placeholder={placeholder} className={baseClasses} />

      {icon && iconPosition === 'right' && icon}
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  sizeHeight: PropTypes.number,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['dark', 'light']),
};

Input.defaultProps = {
  placeholder: 'Digite aqui...',
  icon: <CircleHelp />,
  iconPosition: 'left',
  sizeHeight: 8,
  type: 'text',
  variant: 'light',
};
