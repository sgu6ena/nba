import * as React from "react";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables"
import {useRef} from "react";

export interface IInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  id?:string;
  onChange?:any;
}

const StyledInput = styled.div`

  label {
    display: flex;
    flex-direction: column;

    div {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color:  ${vars.$grey};
      margin-bottom: 8px;
    }
    input {
      transition: all 0.2s;
      height: 40px;
      padding: 8px 12px;
      border: none;
      background:  ${vars.$lightestGrey1};
      border-radius: 4px;

      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      line-height: 171%;
      color:  ${vars.$darkGrey};

      &:hover {
        outline: none;
        transition: all 0.2s;
        background:  ${vars.$lightestGrey};
      }
      &:focus {
        outline: none;
        transition: all 0.2s;
        background:  ${vars.$lightestGrey1};
        box-shadow: 0px 0px 5px ${vars.$lightestGrey};
      }
      &:placeholder {
        transition: all 0.2s;
        color: ${vars.$lightestGrey};
      }
      &:disabled {
        color: ${vars.$lightestGrey};
      }
      &.error {
        border: 1px solid ${vars.$lightestRed};
      }
    }
    span {
      transition: all 0.2s;
      font-size: 0.75em;
      line-height: 150%;
      color: ${vars.$lightestRed};
    }
  }
`;


const Input: React.FC<IInputProps> = ({
  label,
  type,
  value,
  placeholder,
  error,disabled, id,onChange
}) => {

  return (
    <StyledInput>
      <label>
        <div>{label}</div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className={error ? "error" : ""}
          disabled={disabled}
          id={id}
          onChange={onChange}
        />
        <span>{error}</span>
      </label>
    </StyledInput>
  );
};

export default Input;
