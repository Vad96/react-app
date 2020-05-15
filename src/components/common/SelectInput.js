//@flow

import React from "react";

type SelectInputProps = {|
  name: string,
  label: string,
  onChange:  (event: SyntheticInputEvent<EventTarget>) => void,
  defaultOption: string,
  value: string,
  error: string,
  options: Array<{
    value: number,
    text: string,
  }>,
|}

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options
}: SelectInputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
