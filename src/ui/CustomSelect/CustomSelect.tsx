import * as React from "react";
import Select from "react-select";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";

interface ICustomSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  isClearable:boolean;
}

const StyledLabel = styled.label`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${vars.$grey};
  margin: 3px 0;
  .error {
    display: block;
    height: 10px;
    transition: all 0.2s;
    font-size: 10px;
    line-height: 150%;
    color: ${vars.$lightestRed};
  }
  .select {
    outline: none;
    border: none;
    padding: 5px 0 0 0;
  }
`;

const customStyles = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: vars.$grey,
    borderLeft: `1px solid ${vars.$lightestGrey}`,
    margin: "2px 0",
  }),

  menuList: (provided: any) => ({
    ...provided,
    background: ` ${vars.$white}`,
    padding: "0",
    borderRadius: "4px",
  }),
  option: (
    provided: any,
    state: { isSelected: boolean; isFocused: boolean }
  ) => ({
    ...provided,
    borderBottom: "1px solid lightgrey",
    background: state.isSelected
      ? vars.$lightRed
      : state.isFocused
      ? vars.$lightestRed
      : "white",
    color: state.isSelected ? "white" : state.isFocused ? "white" : "grey",
    hover: "blue",
  }),
};

const CustomSelect: React.FunctionComponent<ICustomSelectProps> = ({
  label,
  ...props
}) => {
  return (
    <div>
      <StyledLabel>
        {label}
        {/*  @ts-ignore    */}
        <Select
          {...props}
          styles={customStyles}
          className="select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 4,
            border: "none",
            colors: {
              ...theme.colors,
              neutral0: vars.$lightestGrey1,

              primary50: vars.$lightRed,
              primary75: vars.$lightestRed,
              primary: vars.$lightestGrey,
              neutral20: vars.$lightestGrey1,
            },
          })}
        />
        <span className="error"></span>
      </StyledLabel>
    </div>
  );
};

export default CustomSelect;
