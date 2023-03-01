import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: relative;
  flex-direction: column-reverse;
  height: 25px;
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: 0;
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const BoxText = styled.div`
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  z-index: 1;
  background: white;
  margin: 0px;
`;

export const BarraProgresso = styled.div`
  height: 10px;
  width: 0%;
  ${({ progreco }) => progreco && css`
    width: ${progreco}%;
  `}
  background: aliceblue;
  position: absolute;
  transition: all 0.5s;
`;


export const Barra = styled.div`
  height: 10px;
  background-color: darkgrey;
  width: 100%;
  position: absolute;
`;

export const CorpoBarra = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;