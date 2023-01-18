import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import * as C from '../../assets/color';

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 10%;
  background: ${C.primary};
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

export const Rota = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 0.3s;
  ${({ paginaAtual }) =>
    paginaAtual &&
    css`
      text-decoration: underline #ffffff;
    `}
  :hover {
    transform: scale(1.1);
  }
`;

export const IconDiv = styled.div`
  align-items: center;
  display: flex;
`;
