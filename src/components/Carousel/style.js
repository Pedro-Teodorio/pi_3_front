import styled from 'styled-components';

export const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #021826;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px; /* Tamanho do ícone ou texto */
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:after {
    font-size: 24px;
  }

  &:hover {
    background-color: #0056b3;
    transform: translateY(-50%) scale(1.1); /* Aumenta um pouco no hover */
  }

  &.prev {
    left: 15px; /* Ajuste da posição à esquerda */
  }

  &.next {
    right: 15px; /* Ajuste da posição à direita */
  }

  svg {
    width: 12px; /* Diminuindo o tamanho do ícone de seta */
    height: 12px;
  }
`;
