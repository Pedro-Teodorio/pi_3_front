import { NavBar, ListCateg } from './style';
export default function Nav() {
  return (
    <NavBar className="bg-blueTheme font-inter flex justify-center items-center font-bold">
      <ListCateg>
        <li className="text-white">
          <a href="#">Processadores</a>
        </li>
        <li className="text-white">
          <a href="#">Placa Mãe</a>
        </li>
        <li className="text-white">
          <a href="#">Memória Ram</a>
        </li>
        <li className="text-white">
          <a href="#">Gabinete</a>
        </li>
      </ListCateg>
    </NavBar>
  );
}
