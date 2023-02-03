import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../template/Input';
import Request from '../../../../services/Api';
import * as B from '../../../../template/button/style';
import * as S from '../../style';

const FormularioCaminhao = ({ setIdCaminhao, Proximo }) => {
  const [Nome, setNome] = useState('');
  const [Placa, setPlaca] = useState('');
  const [OmnLink, setOmnLink] = useState('');
  const [Crv, setCrv] = useState('');
  const [Tipo, setTipo] = useState('');
  const [Capacidade, setCapacidade] = useState(0);
  const [Discricao, setDiscricao] = useState('');

  const [Disabled, setDisabled] = useState(false);

  const Cadastra = async (evt) => {
    evt.preventDefault();

    const ValidatePayload = (thisPaylode) => {
      if (thisPaylode.nome === '') {
        alert('Apelido do caminhao não foi preenchido');
        return false;
      }
      if (thisPaylode.placa === '') {
        alert('Placa do caminhao não foi preenchido');
        return false;
      }
      if (thisPaylode.omnLink === '') {
        alert('O OmnLink do caminhao nao foi preenchido');
        return false;
      }
      if (thisPaylode.crv === '') {
        alert('Crv do caminhao nao foi preenchido');
        return false;
      }
      if (thisPaylode.capacidade <= 0) {
        alert('A capacidade do caminhao deveser mairo que 0');
        return false;
      }
      return true;
    };

    try {
      const payload = {
        nome: Nome,
        placa: Placa,
        omnLink: OmnLink,
        crv: Crv,
        tipo: Tipo,
        capacidade: Capacidade,
        discricao: Discricao,
      };
      if (ValidatePayload(payload)) {
        const Response = await Request.POST('/Caminhao', payload);
        if (Response.status === 201) {
          setDisabled(true);
          setIdCaminhao(Response.data.id);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <S.Titulo>Cadastro de caminhão</S.Titulo>
      <S.Formulario onSubmit={Cadastra}>
        <Input
          title="Apelido do caminhão"
          value={Nome}
          onChange={setNome}
          mandatory
          disabled={Disabled}
        />
        <Input
          title="Placa"
          value={Placa}
          onChange={setPlaca}
          mandatory
          disabled={Disabled}
        />
        <Input
          title="OmnLink"
          value={OmnLink}
          onChange={setOmnLink}
          mandatory
          disabled={Disabled}
        />
        <Input
          title="Crv"
          value={Crv}
          onChange={setCrv}
          mandatory
          disabled={Disabled}
        />
        <Input
          title="Tipo"
          value={Tipo}
          onChange={setTipo}
          mandatory
          disabled={Disabled}
        />
        <Input
          title="Capacidade"
          value={Capacidade}
          onChange={setCapacidade}
          inputType="number"
          mandatory
          disabled={Disabled}
        />
        <Input
          title="Descrição"
          value={Discricao}
          onChange={setDiscricao}
          disabled={Disabled}
        />
        <S.DivBotaoCadastrar>
          <B.ButtonPrimario onClick={Proximo}>Cadastrar</B.ButtonPrimario>
        </S.DivBotaoCadastrar>
      </S.Formulario>
    </div>
  );
};

FormularioCaminhao.propTypes = {
  setIdCaminhao: PropTypes.func.isRequired,
  Proximo: PropTypes.func.isRequired,
};

export default FormularioCaminhao;
