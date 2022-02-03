import * as React from "react";
import Select from "react-select";
import styled from "styled-components";
import * as colors from "../../variables/colors";

interface ICustomSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  isClearable:boolean;
}


const customStyles = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: colors.$grey,
    borderLeft: `1px solid ${colors.$lightestGrey}`,
    margin: "2px 0",
  }),

  menuList: (provided: any) => ({
    ...provided,
    background: ` ${colors.$white}`,
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
      ? colors.$lightRed
      : state.isFocused
      ? colors.$lightestRed
      : "white",
    color: state.isSelected ?colors.$white : state.isFocused ?colors.$white : colors.$grey,
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
              neutral0: colors.$lightestGrey1,
              primary50: colors.$lightRed,
              primary75: colors.$lightestRed,
              primary: colors.$lightestGrey,
              neutral20: colors.$lightestGrey1,
            },
          })}
        />
        <span className="error"></span>
      </StyledLabel>
    </div>
  );
};

export default CustomSelect;

const StyledLabel = styled.label`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.$grey};
  margin: 3px 0;
  .error {
    display: block;
    height: 10px;
    transition: all 0.2s;
    font-size: 10px;
    line-height: 150%;
    color: ${colors.$lightestRed};
  }
  .select {
    outline: none;
    border: none;
    padding: 5px 0 0 0;
  }
`;
