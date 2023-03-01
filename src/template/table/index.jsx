/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const Table = ({ cabesario, Corpo }) => {
  const RenderItensLinha = useCallback(
    (lista) => {
      if (lista.length > 0) {
        const nameColunas = Object.getOwnPropertyNames(lista[0]);
        const indexRemocao = nameColunas.indexOf('onClickStatus');
        if (indexRemocao > -1) nameColunas.splice(indexRemocao, 1);

        return lista.map((item, i) => (
          <tr key={`linha-${i + 1}`}>
            {nameColunas.map(
              (variable, j) =>
                variable !== 'index' && (
                  <td key={`linha-${i + 1}-colona-${j + 1}`}>
                    <p>{item[variable]}</p>
                  </td>
                )
            )}
          </tr>
        ));
      }
      return null;
    },
    [Corpo]
  );

  return (
    <S.Tabela>
      <S.CabesarioTabela>
        <tr>
          {cabesario.length > 0 &&
            cabesario.map((item) => <th key={item}>{item}</th>)}
        </tr>
      </S.CabesarioTabela>
      <S.CorpoTabela>{RenderItensLinha(Corpo)}</S.CorpoTabela>
    </S.Tabela>
  );
};

Table.propTypes = {
  cabesario: PropTypes.arrayOf(PropTypes.string).isRequired,
  Corpo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
