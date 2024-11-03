import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { PerfilContainer } from './style';

export default function Perfil() {
  return (
    <>
      <Header />
      <PerfilContainer className="bg-dark-gray"></PerfilContainer>
      <Footer />
    </>
  );
}
