import React from 'react';
import PropsTypes from 'prop-types';
import IconTransporte from '../../assets/icons/truck-2-32.ico';
import * as S from './style';

const Cabecalho = ({ paginaAtual }) => (
  <S.Cabecalho>
    <S.IconDiv>
      <img src={IconTransporte} alt="" />
    </S.IconDiv>
    <S.Lista>
      <S.Rota to="/caminhao" paginaAtual={paginaAtual === 'caminhao'}>
        Caminhão
      </S.Rota>
      <S.Rota to="/funcionario" paginaAtual={paginaAtual === 'funcionario'}>
        Funcionario
      </S.Rota>
      <S.Rota to="/financiamento" paginaAtual={paginaAtual === 'financiamento'}>
        Financiamento
      </S.Rota>
      <S.Rota to="/seguro" paginaAtual={paginaAtual === 'seguro'}>
        Seguro
      </S.Rota>
    </S.Lista>
  </S.Cabecalho>
);

Cabecalho.propTypes = {
  paginaAtual: PropsTypes.string.isRequired,
};

export default Cabecalho;
