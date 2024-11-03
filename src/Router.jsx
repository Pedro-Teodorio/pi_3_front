import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import Perfil from './pages/Perfil';
import ProtectedRoute from './components/ProtectedRoute ';

export default function Router() {
  const getToken = () => {
    return localStorage.getItem('token');
  };

  const isAuthenticated = () => {
    return !!getToken();
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated()} />}>
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}
