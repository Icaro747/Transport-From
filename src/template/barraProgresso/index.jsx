import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const BarraProgresso = ({ etapas, posicaoAtual }) => {
  const [Progreco, setProgreco] = useState(0);

  useEffect(() => {
    const a = 100 / (etapas.length - 1);
    let b = 0;
    while (b < etapas.length) {
      if (etapas[b] === posicaoAtual) {
        setProgreco(a * b);
        b = etapas.length;
      } else {
        b += 1;
      }
    }
  }, [posicaoAtual]);

  return (
    <S.Container>
      <S.CorpoBarra>
        <S.Barra />
        <S.BarraProgresso progreco={Progreco} />
      </S.CorpoBarra>
      <S.Items>
        {etapas.map((item) => (
          <S.BoxText
            key={`etapas-item-${item}`}
            posicaoAtual={item === posicaoAtual}
          >
            {item === posicaoAtual ? (
              <p>
                <b>{item}</b>
              </p>
            ) : (
              <p>{item}</p>
            )}
          </S.BoxText>
        ))}
      </S.Items>
    </S.Container>
  );
};

BarraProgresso.propTypes = {
  etapas: PropTypes.arrayOf(PropTypes.string).isRequired,
  posicaoAtual: PropTypes.string.isRequired,
};

export default BarraProgresso;
