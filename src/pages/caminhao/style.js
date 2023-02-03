import styled, { css } from 'styled-components';

export const Titulo = styled.h1`
  font-size: 25px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BotacaoCadastrar = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  :hover {
    color: black;
    outline: 0;
  }
  :focus {
    color: black;
    outline: 0;
  }
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
`;

export const BoxCentralizacao = styled.div`
  width: 80%;
`;

export const DivBotaoCadastrar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const Container = styled.div`
  flex-direction: column;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: -18%;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  top: 2;
  position: absolute;
  top: 15%;
  margin-top: -25px;
  left: 25%;
  width: 50%;
  border-radius: 13px;
`;

export const Divisor = styled.div`
  width: 0%;
  overflow: hidden;
  transition: all 0.5s;
  ${({ ativo }) =>
    ativo &&
    css`
      width: 100%;
    `}
`;

export const BoxMasterDivisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const Formulario = styled.form`
  margin: auto;
  width: 450px;
`;
