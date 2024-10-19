import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Nav from '../../components/Nav';

export default function Home() {
  return (
    <div className="box-border">
      <Header />
      <Nav />
      <HeroSection />
      <Footer />
    </div>
  );
}
