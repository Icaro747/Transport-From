/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const BarraProgresso = ({ etapas, posicaoAtual }) => {
  return (
    <S.Container>
      <S.BarraProgresso />
      <S.Items>
        {etapas.map((item) => (
          <S.BoxText
            key={`etapas-item-${item}`}
            posicaoAtual={item === posicaoAtual}
          >
            <span>{item}</span>
          </S.BoxText>
        ))}
      </S.Items>
    </S.Container>
  );
};

BarraProgresso.propsType = {
  etapas: PropTypes.arrayOf(PropTypes.string).isRequired,
  posicaoAtual: PropTypes.string.isRequired,
};

export default BarraProgresso;
