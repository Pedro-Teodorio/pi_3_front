import PropTypes from 'prop-types';

export function ContentBoxed({ children, className }) {
  return (
    <section className={`mx-auto w-full max-w-screen-2xl ${className}`}>
      {children}
    </section>
  );
}
ContentBoxed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
