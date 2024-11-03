import { Heart, ShoppingBag, ShoppingCart } from 'lucide-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Button from '../../components/Button';

import { ProfileSection, Avatar, BoxSection, ProfileBox } from './style';

export default function Profile() {
  return (
    <div className="font-inter">
      <Header />
      <Nav />
      <section className="flex h-[720px] w-full flex-col items-center gap-14 bg-dark-gray">
        <ProfileSection>
          <div className="flex justify-center">
            <Avatar
              src="https://fastly.picsum.photos/id/1045/50/50.jpg?hmac=3Yzyfn26UDkAdbaDN7rA6HYbgXSOqFiGheAovNPVsfE"
              alt="User Avatar"
            />
            <div className="text-white">
              <p className="m-0 text-body-sm">Bem-vindo, usuário</p>
              <p className="text-body-xs">email@email.com</p>
            </div>
          </div>
          <Button>Editar perfil</Button>
        </ProfileSection>
        <BoxSection className="font-inter">
          <ProfileBox>
            <Heart size={44} className="text-primary" />
            <div>
              <div>
                <h1>FAVORITOS</h1>
                <p>Sua lista de desejos</p>
              </div>
            </div>
          </ProfileBox>
          <ProfileBox>
            <ShoppingBag size={44} className="text-primary" />
            <div>
              <h1>MEUS PEDIDOS</h1>
              <p>Veja seus pedidos e acompanhe suas compras</p>
            </div>
          </ProfileBox>
          <ProfileBox>
            <ShoppingCart size={44} className="text-primary" />
            <div>
              <h1>CARRINHO</h1>
              <p>Gerencie seu carrinho</p>
            </div>
          </ProfileBox>
        </BoxSection>
      </section>
      <Footer />
    </div>
  );
}
