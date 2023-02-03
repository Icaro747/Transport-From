/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import Financiamento from './components/financiamento';
import Seguro from './components/seguro';
import * as S from './style';
import Cabecalho from '../../template/cabecalho';
import BarraProgresso from '../../template/barraProgresso';
import FormularioCaminhao from './components/caminhao';

const CreateCaminhao = () => {
  const [IdCaminhao, setCaminhaoId] = useState('');
  const [pushUm, setPushUm] = useState(true);
  const [pushDois, setPushDois] = useState(false);
  const [pushTres, setPushTres] = useState(false);

  useEffect(() => {
    if (pushDois) {
      setPushUm(false);
      setPushTres(false);
    }
  }, [pushDois]);

  useEffect(() => {
    if (pushTres) {
      setPushUm(false);
      setPushDois(false);
    }
  }, [pushTres]);

  return (
    <>
      <Cabecalho />
      <S.Container>
        <S.BoxCentralizacao>
          <BarraProgresso
            etapas={['caminhão', 'Financiamento', 'Seguro']}
            posicaoAtual="caminhão"
          />
        </S.BoxCentralizacao>
        <S.BoxMasterDivisor>
          <S.Divisor ativo={pushUm}>
            <FormularioCaminhao
              setCaminhaoId={setCaminhaoId}
              Proximo={() => setPushDois(true)}
            />
          </S.Divisor>
          <S.Divisor ativo={pushDois}>
            <Financiamento id={IdCaminhao} Proximo={() => setPushTres(true)} />
          </S.Divisor>
          <S.Divisor ativo={pushTres}>
            <Seguro id={IdCaminhao} />
          </S.Divisor>
        </S.BoxMasterDivisor>
      </S.Container>
    </>
  );
};

export default CreateCaminhao;
