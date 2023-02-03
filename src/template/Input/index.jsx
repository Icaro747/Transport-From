/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import listType from './components/ListType';

const Input = ({
  title,
  value,
  onChange,
  size,
  inputName,
  inputType,
  invalid,
  disabled,
  mandatory,
  maxTextSize,
}) => (
  <S.Container>
    <S.Box>
      <S.LabelInput>
        {title}
        {mandatory && <span>*</span>}
      </S.LabelInput>
      <S.InputGeral
        name={inputName}
        type={inputType === 'decimal' ? 'number' : inputType}
        value={value}
        step={inputType === 'decimal' ? '0.01' : undefined}
        onChange={(e) => {
          const newValue = e.target.value;
          if (newValue.toString().length <= maxTextSize || maxTextSize === -1) {
            onChange(newValue);
          }
        }}
        disabled={disabled}
      />
    </S.Box>
  </S.Container>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number,
  inputName: PropTypes.string,
  inputType: PropTypes.oneOf(listType),
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  maxTextSize: PropTypes.number,
};

Input.defaultProps = {
  value: '',
  size: 150,
  inputName: undefined,
  inputType: 'text',
  invalid: false,
  disabled: false,
  mandatory: false,
  maxTextSize: -1,
};

export default Input;
