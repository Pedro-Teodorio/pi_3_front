import PropTypes from 'prop-types';
export const InputContent = ({ placeholder, type, register, maxLength }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-full w-full bg-transparent px-2 outline-none placeholder:text-neutral-400`}
      {...register}
      maxLength={maxLength}
    />
  );
};

InputContent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.object,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
};
