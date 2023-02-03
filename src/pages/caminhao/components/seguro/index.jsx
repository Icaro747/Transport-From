import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from '../../style';
import Input from '../../../../template/Input';
import Request from '../../../../services/Api';
import Convert from '../../../../utils/convert';
// import Cabecalho from '../../../../template/cabecalho';

const Seguro = ({ id }) => {
  const [Numero, setNumero] = useState('');
  const [Valor, setValor] = useState(0);
  const [DataVencimento, setDataVencimento] = useState(
    Convert.DateToString(new Date())
  );
  const [Disabled, setDisabled] = useState(false);

  const CadastraSeguro = async (evt) => {
    evt.preventDefault();

    try {
      const payload = {
        numero: Numero,
        valor: Valor,
        dataVencimento: DataVencimento,
        idCaminhao: id,
      };

      if (true) {
        const Response = await Request.POST('/Seguro', payload);
        if (Response.status === 201) {
          setDisabled(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <Cabecalho /> */}
      <div>
        <form onSubmit={CadastraSeguro}>
          <S.Titulo>Cadastro de Seguro</S.Titulo>
          <Input
            title="Numero do seguro"
            value={Numero}
            onChange={setNumero}
            mandatory
            disabled={Disabled}
          />
          <Input
            title="Valor Messal"
            value={Valor}
            onChange={setValor}
            mandatory
            disabled={Disabled}
          />
          <Input
            title="Data Vencimento"
            value={DataVencimento}
            onChange={setDataVencimento}
            inputType="date"
            mandatory
            disabled={Disabled}
          />
          <S.DivBotaoCadastrar>
            <S.BotacaoCadastrar type="submit">Cadastrar</S.BotacaoCadastrar>
          </S.DivBotaoCadastrar>
        </form>
      </div>
    </>
  );
};

Seguro.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Seguro;
