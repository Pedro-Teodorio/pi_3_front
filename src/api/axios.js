// src/instance/axiosConfig.js
import axios from 'axios';

// Configura a URL base da instance
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

// Função para recuperar o token de localStorage e setar no cabeçalho
const setAuthHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

// Inicializa com o token se disponível
setAuthHeader();

// Configura um interceptor para gerenciar respostas de erro, como 401
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        // Token expirado ou inválido, limpa o token e redireciona para login
        localStorage.removeItem('token');
        setAuthHeader(); // Remove o cabeçalho de autorização
        window.location.href = '/login';
      } else if (status >= 500) {
        // Notificar o usuário em caso de erro de servidor
        alert('Erro do servidor. Por favor, tente novamente mais tarde.');
      }
    }

    return Promise.reject(error);
  }
);

// Exporta a instância do Axios configurada
export default instance;
