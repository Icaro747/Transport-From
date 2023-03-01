import React, { useState, useEffect } from 'react';

import Cabecalho from '../../template/cabecalho';
import Table from '../../template/table';

import Request from '../../services/Api';

const Home = () => {
  const [Lista, setLista] = useState([]);

  const Listagem = async () => {
    const Response = await Request.GET('/Caminhao');
    if (Response.status === 200) {
      const newLista = [];
      Response.data.forEach((element) => {
        newLista.push({
          nome: element.nome,
          placa: element.placa,
          omnLink: element.omnLink,
          crv: element.crv,
          tipo: element.tipo,
          capacidade: element.capacidade,
        });
      });
      setLista(newLista);
    }
  };

  useEffect(() => {
    Listagem();
  }, []);

  return (
    <div>
      <Cabecalho />
      <Table
        cabesario={['Nome', 'Placa', 'OmnLink', 'Crv', 'Tipo', 'Capacidade']}
        Corpo={Lista}
      />
    </div>
  );
};
export default Home;
