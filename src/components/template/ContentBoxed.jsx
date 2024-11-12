import PropTypes from "prop-types";

export function ContentBoxed({ children, className }) {
	return <section className={`max-w-screen-2xl w-full  mx-auto  ${className}`}>{children}</section>;
}
ContentBoxed.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
