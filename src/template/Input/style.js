import styled from 'styled-components';

export const InputGeral = styled.input`
  font-size: 25px;
  width: 100%;
  padding: 20px 5px 5px;
  background-color: #d5d5d5;
  border: none;
  border-radius: 4px;
  margin: 10px;
`;

export const LabelInput = styled.label`
  font-size: 22px;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const DivOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const DivBox = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  gap: 10px;
`;
