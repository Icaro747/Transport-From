import styled from 'styled-components';

export const Tabela = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid #eee;
`;

export const CabesarioTabela = styled.thead`
  background-color: #fff;
  box-shadow: inset 0px -1px 0px #eee, 0px 5px 5px -5px rgba(0,0,0,.1);
  position: relative;  
  tr{
    display: block;
    position: relative;
    th{
      padding: 5px;
      text-align: left;
      width: 20%;
    }
  }
`;

export const CorpoTabela = styled.tbody`
  display: block;
  overflow: auto;
  width: 100%;
  height: calc(100vh - 50px);
  tr{
    display: block;
    position: relative;
    td{
      padding: 5px;
      text-align: left;
      width: 20%;
    }
  }
`;