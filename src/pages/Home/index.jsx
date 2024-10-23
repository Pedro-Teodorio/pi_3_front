import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Nav from '../../components/Nav';
import { ProductsCategorySection } from '../../components/products-category-section/ProductsCategorySection';

export default function Home() {
  return (
    <div className="box-border bg-neutral-900">
      <Header />
      <Nav />
      <HeroSection />
      <ProductsCategorySection name_section="Mais Novos" />
      <ProductsCategorySection name_section="Processadores" />
      <Footer />
    </div>
  );
}
