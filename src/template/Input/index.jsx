/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

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
}) => (
  <div>
    <label>{title}</label>
    <input
      name={inputName}
      type={inputType}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  </div>
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
};

Input.defaultProps = {
  value: '',
  size: 150,
  inputName: undefined,
  inputType: 'text',
  invalid: false,
  disabled: false,
};

export default Input;
