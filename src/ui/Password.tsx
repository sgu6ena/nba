import React, { useEffect, useState } from "react";
import { ReactComponent as Eye } from "../assets/icons/eye.svg";
import { ReactComponent as CloseEye } from "../assets/icons/close-eye.svg";
import * as vars from "../assets/variables/variables";
import styled from "styled-components";

const StyledLabel = styled.label`

  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${vars.$grey};

`;

const InputGroup = styled.div`
  background: ${vars.$lightestGrey1};
  border-radius: 4px;
  margin: 8px 0 0 0;
  padding: 2px 0 ;
  display: flex;
  align-items: center;
  width: 100%;

  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 171%;
  color: ${vars.$darkGrey};

  &:hover input,
  &:hover {
    transition: all 0.2s;
    background: ${vars.$lightestGrey};
  }
  &:focus {
    outline: none;
    transition: all 0.2s;
    background: ${vars.$lightestGrey1};
    box-shadow: 0px 0px 5px ${vars.$lightestGrey};
  }
  & button {
    font-weight: 300;
    font-size: 20px;
    color: #dadada;
    padding: 0px;
    margin: 0;
    min-width: 30px;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    aspect-ratio: 1/1;
  }

  & input {
    border-radius: 4px;
    background: ${vars.$lightestGrey1};
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    line-height: 171%;
    color: ${vars.$darkGrey};

    width: 100%;
    margin: 0;
    border: 0;
    padding: 8px 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;

    &::placeholder {
      color: #e0e0e0;
    }

    &:focus {
      outline: none;
    }
  }
`;

export interface IPasswordProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
}

const Password: React.FC<IPasswordProps> = ({ placeholder, label,...props }) => {
  const [preview, setPreview] = useState(true);
  useEffect(() => {}, [preview]);
  return (
    <StyledLabel>

      {label}
      <InputGroup>
        <input
          type={preview ? "password" : "text"}
          className={"password"}
          placeholder={placeholder}

          {...props}
        />
        <button onClick={() => setPreview(!preview)}>
          {!preview ? (
            <Eye width={16} height={16} />
          ) : (
            <CloseEye width={16} height={16} />
          )}
        </button>
      </InputGroup>
    </StyledLabel>
  );
};

export default Password;
