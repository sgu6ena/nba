import React from "react";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import * as colors from "../сommon/variables/colors";
import * as sizes from "../сommon/variables/sizes";
import styled from "styled-components";

const InputGroup = styled.div`
  height: 40px;
  width: 350px;
  flex-grow: 0;
  flex-shrink: 1;
  padding: 8px 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 0.5px solid #d1d1d1;

  @media (max-width: ${sizes.$sm}) {
    width: 100%;
  }

  & button {
    font-weight: 300;
    font-size: 20px;
    color: #dadada;
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    aspect-ratio: 1/1;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-weight: 500;
    padding: 2px 0;
    font-size: 14px;
    line-height: 24px;

    color: ${colors.$grey};
  }
`;

export interface ISearchInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
}

const SearchInput: React.FC<ISearchInputProps> = ({ placeholder, label }) => {
  return (
    <InputGroup>
      <input placeholder={placeholder} />
      <button>
        <Search />
      </button>
    </InputGroup>
  );
};

export default SearchInput;
