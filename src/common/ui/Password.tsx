import React, { useEffect, useState } from "react";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as CloseEye } from "../../assets/icons/close-eye.svg";
import * as colors from "../variables/colors";
import styled from "styled-components";

export interface IPasswordProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
}

const Password: React.FC<IPasswordProps> = ({
  placeholder,
  label,
  error,
  ...props
}) => {
  const [preview, setPreview] = useState(true);
  useEffect(() => {}, [preview]);
  return (
    <StyledLabel>
      {label}
      <InputGroup className={error ? "error" : ""}>
        <input
          type={preview ? "password" : "text"}
          className={"password"}
          placeholder={placeholder}
          {...props}
        />
        <EyeBox onClick={() => setPreview(!preview)}>
          {!preview ? (
            <Eye width={16} height={16} />
          ) : (
            <CloseEye width={16} height={16} />
          )}
        </EyeBox>
      </InputGroup>
      <span>{error}</span>
    </StyledLabel>
  );
};

export default Password;
const EyeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const StyledLabel = styled.label`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.$grey};
  span {
    display: block;
    height: 10px;
    transition: all 0.2s;
    font-size: 10px;
    line-height: 150%;
    color: ${colors.$lightestRed};
  }
`;

const InputGroup = styled.div`
  background: ${colors.$lightestGrey1};
  border-radius: 4px;
  margin: 8px 0 0 0;
  padding: 2px 0;
  display: flex;
  align-items: center;
  width: 100%;

  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 171%;
  color: ${colors.$darkGrey};
  &.error {
    border: 1px solid ${colors.$lightestRed};
  }
  &:hover input,
  &:hover {
    transition: all 0.2s;
    background: ${colors.$lightestGrey};
    svg {
      color:  ${colors.$white};
    }
  }
  &:focus {
    outline: none;
    transition: all 0.2s;
    background: ${colors.$lightestGrey1};
    box-shadow: 0px 0px 5px ${colors.$lightestGrey};
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
    background: ${colors.$lightestGrey1};
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 171%;
    color: ${colors.$darkGrey};
    width: 100%;
    margin: 0;
    border: 0;
    padding: 4px 12px;

    &::placeholder {
      color: ${colors.$lightestGrey};
    }

    &:focus {
      outline: none;
    }
  }
`;
