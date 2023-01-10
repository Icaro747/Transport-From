import React, { useState } from 'react';

import Financiamento from './components/financiamento';
import Seguro from './components/seguro';

import Input from '../../template/Input';
import Request from '../../services/Api';

const caminhao = () => {
  const [Nome, setNome] = useState('');
  const [Placa, setPlaca] = useState('');
  const [OmnLink, setOmnLink] = useState('');
  const [Crv, setCrv] = useState('');
  const [Tipo, setTipo] = useState('');
  const [Capacidade, setCapacidade] = useState(0);
  const [Discricao, setDiscricao] = useState('');

  const [Disabled, setDisabled] = useState(false);
  const [IdCaminhao, setIdCaminhao] = useState('');
  console.log('🚀 ~ file: index.jsx:20 ~ caminhao ~ IdCaminhao', IdCaminhao);

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
    <>
      <section>
        <div>
          <form onSubmit={Cadastra}>
            <h1>Cadastro de caminha</h1>
            <Input
              title="Apelido do caminha"
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
            <button type="submit">Cadastra</button>
          </form>
        </div>
      </section>
      <Financiamento id={IdCaminhao} />
      <Seguro id={IdCaminhao} />
    </>
  );
};

export default caminhao;
