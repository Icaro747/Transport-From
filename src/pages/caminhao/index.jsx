import React, { useState } from 'react';

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

  const Cadastra = async (evt) => {
    evt.preventDefault();
    const data = await Request.GET('Caminhao');
    console.log('🚀 ~ file: index.jsx:17 ~ Cadastra ~ data', data);
  };

  return (
    <div>
      <form onSubmit={Cadastra}>
        <h1>cadastro de caminha</h1>
        <Input title="Apelido do caminha" value={Nome} onChange={setNome} />
        <Input title="Placa" value={Placa} onChange={setPlaca} />
        <Input title="OmnLink" value={OmnLink} onChange={setOmnLink} />
        <Input title="Crv" value={Crv} onChange={setCrv} />
        <Input title="Tipo" value={Tipo} onChange={setTipo} />
        <Input
          title="Capacidade"
          value={Capacidade}
          onChange={setCapacidade}
          inputType="number"
        />
        <Input title="Descrição" value={Discricao} onChange={setDiscricao} />
        <button type="submit">Cadastra</button>
      </form>
    </div>
  );
};

export default caminhao;
