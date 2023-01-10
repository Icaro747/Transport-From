import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../template/Input';
import Request from '../../../../services/Api';
import Convert from '../../../../utils/convert';

const Financiamento = ({ id }) => {
  const [Financiador, setFinanciador] = useState('');
  const [Banco, setBanco] = useState('');
  const [ValorTotal, setValorTotal] = useState(0);
  const [ValorMensal, setValorMensal] = useState(0);
  const [ValorPago, setValorPago] = useState(0);
  const [QtdParcelas, setQtdParcelas] = useState(0);
  const [DataInicio, setDataInicio] = useState(
    Convert.DateToString(new Date())
  );
  const [Disabled, setDisabled] = useState(false);

  const CadastraFinanciamento = async (evt) => {
    evt.preventDefault();

    try {
      const payload = {
        financiador: Financiador,
        banco: Banco,
        valorTotal: ValorTotal,
        valorMensal: ValorMensal,
        valorPago: ValorPago,
        qtdParcelas: QtdParcelas,
        dataInicio: DataInicio,
        idCaminhao: id,
      };
      if (true) {
        const Response = await Request.POST('/Financiamento', payload);
        if (Response.status === 201) {
          setDisabled(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      {id !== '' && (
        <div>
          <form onSubmit={CadastraFinanciamento}>
            <h1>Cadastro de financiamento</h1>
            <Input
              title="Financiador"
              value={Financiador}
              onChange={setFinanciador}
              mandatory
              disabled={Disabled}
            />
            <Input
              title="Banco"
              value={Banco}
              onChange={setBanco}
              mandatory
              disabled={Disabled}
            />
            <Input
              title="Valor Total"
              value={ValorTotal}
              onChange={setValorTotal}
              inputType="decimal"
              mandatory
              disabled={Disabled}
            />
            <Input
              title="Valor Mensal"
              value={ValorMensal}
              onChange={setValorMensal}
              inputType="decimal"
              mandatory
              disabled={Disabled}
            />
            <Input
              title="Valor Pago"
              value={ValorPago}
              onChange={setValorPago}
              inputType="decimal"
              mandatory
              disabled={Disabled}
            />
            <Input
              title="Qtd Parcelas"
              value={QtdParcelas}
              onChange={setQtdParcelas}
              inputType="number"
              mandatory
              disabled={Disabled}
            />
            <Input
              title="Data Inicio"
              value={DataInicio}
              onChange={setDataInicio}
              inputType="date"
              mandatory
              disabled={Disabled}
            />
            <button type="submit">Cadastra Financiamento</button>
          </form>
        </div>
      )}
    </section>
  );
};

Financiamento.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Financiamento;
