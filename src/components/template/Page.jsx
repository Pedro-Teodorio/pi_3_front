import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';

export function Page({ children, className }) {
  return (
    <div className="flex min-h-screen max-w-full flex-col">
      <Header />
      <main className={`flex-1 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
