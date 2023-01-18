import React, { useState } from 'react';
import Input from '../../template/Input';
import Cabecalho from '../../template/cabecalho';
import * as S from './style';

const Funcionario = () => {
  const [Nome, setNome] = useState('');
  const [Sobrenome, setSobreNome] = useState('');
  const [Telefone, setTelefone] = useState(0);
  const [Email, setEmail] = useState('');
  const [Cargo, setCargo] = useState('');
  const [Salario, setSalario] = useState(0);
  const [Disabled, setDisabled] = useState(false);

  const CadastraFinanciamento = async (evt) => {
    evt.preventDefault();

    try {
      const payload = {
        nome: Nome,
        sobrenome: Sobrenome,
        telefone: Telefone,
        email: Email,
        cargo: Cargo,
        salario: Salario,
      };
      if (true) {
        const Response = await Request.POST('/Funcionario', payload);
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
      <Cabecalho />
      <div>
        <form onSubmit={CadastraFinanciamento}>
          <S.Titulo>Cadastro de Funcionario</S.Titulo>
          <Input
            title="Nome"
            value={Nome}
            onChange={setNome}
            mandatory
            disabled={Disabled}
          />
          <Input
            title="Sobre Nome"
            value={Sobrenome}
            onChange={setSobreNome}
            mandatory
            disabled={Disabled}
          />
          <Input
            title="Telefone"
            value={Telefone}
            onChange={setTelefone}
            inputType="decimal"
            mandatory
            disabled={Disabled}
          />
          <Input
            title="E-mail"
            value={Email}
            onChange={setEmail}
            mandatory
            disabled={Disabled}
          />
          <Input
            title="Cargo"
            value={Cargo}
            onChange={setCargo}
            mandatory
            disabled={Disabled}
          />
          <Input
            title="Salário"
            value={Salario}
            onChange={setSalario}
            inputType="number"
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

export default Funcionario;
