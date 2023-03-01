import styled from 'styled-components';
// import * as C from '../../assets/color';

export const ButtonPrimario = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #3498db;
  border-radius: 0.6em;
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
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    color: black;
  }
  :focus {
    color: black;
    outline: 0;
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
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
