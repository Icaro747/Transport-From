import styled from 'styled-components';

export const InputGeral = styled.input`
  padding: 10px;
  outline: 25;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #00000030;
  outline: 0;
  width: 100%;
`;

export const LabelInput = styled.label`
  font-weight: bold;
  margin: 0px;
  padding-left: 10px;
  span{
    color: red;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
