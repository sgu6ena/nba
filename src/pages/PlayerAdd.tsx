import * as React from "react";
import styled from "styled-components";
import LayerPage from "../components/LayerPage";
import Path from "../components/path/path";
import * as vars from "../assets/variables/variables";
import Input from "../ui/input/Input";
import CustomSelect from "../ui/CustomSelect/CustomSelect";

export interface IPlayerAddProps {}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export function PlayerAdd(props: IPlayerAddProps) {
  return (
    <LayerPage>
      <StyledBox>
        <Path type="player" title="Add New Player" />
        <FlexBox>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <img src="d" alt="d" />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Input label="Name" />
            <CustomSelect options={options} label={"Position"} isClearable />
            <CustomSelect options={options} label={"Team"} isClearable />
            <div style={{ display: "flex", gap: "30px" }}>
              <Input label="Heigth (cm)" />
              <Input label="Weight (kg)" />
            </div>{" "}
            <div style={{ display: "flex", gap: "30px" }}>
              <Input label="Birstday" type="date" />
              <Input label="Number" />{" "}
            </div>
          </div>
        </FlexBox>
      </StyledBox>
    </LayerPage>
  );
}

const StyledBox = styled.div`
  padding: 24px 32px;
  width: 100%;
  display: block;
  background-color: ${vars.$white};
`;
const FlexBox = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 48px 0;
  align-items: stretch;
`;
