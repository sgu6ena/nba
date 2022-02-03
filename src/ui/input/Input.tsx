import * as React from "react";
import styled from "styled-components";
import * as colors from "../../common/variables/colors";

export interface IInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  onChange?: any;
}

const Input: React.FC<IInputProps> = ({
  label,
  type,
  value,
  placeholder,
  error,
  disabled,
  id,
  onChange,
  ...props
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
          {...props}
        />
        <span>{error}</span>
      </label>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div`
  width: 100%;
  label {
    display: flex;
    flex-direction: column;

    div {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: ${colors.$grey};
      margin-bottom: 8px;
    }
    input {
      transition: all 0.2s;
      height: 40px;
      padding: 8px 12px;
      border: none;
      background: ${colors.$lightestGrey1};
      border-radius: 4px;

      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 171%;
      color: ${colors.$darkGrey};

      &:hover {
        outline: none;
        transition: all 0.2s;
        background: ${colors.$lightestGrey};
      }
      &:focus {
        outline: none;
        transition: all 0.2s;
        background: ${colors.$lightestGrey1};
        box-shadow: 0 0 5px ${colors.$lightestGrey};
      }
      &::placeholder {
        transition: all 0.2s;
        color: ${colors.$lightestGrey};
      }
      &:disabled {
        color: ${colors.$lightestGrey};
      }
      &.error {
        border: 1px solid ${colors.$lightestRed};
      }
    }
    span {
      display: block;
      height: 10px;
      transition: all 0.2s;
      font-size: 10px;
      line-height: 150%;
      color: ${colors.$lightestRed};
    }
  }
`;
