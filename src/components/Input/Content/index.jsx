import PropTypes from 'prop-types';
export const InputContent = ({ placeholder, type, register }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-full w-full bg-transparent px-2 outline-none placeholder:text-neutral-400`}
      {...register}
    />
  );
};

InputContent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.object,
};
