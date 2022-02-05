import * as React from "react";
import styled from "styled-components";
import LayerPage from "../common/components/LayerPage";
import Path from "../common/components/path/path";
import * as vars from "../common/variables/colors";
import Input from "../common/ui/input/Input";
import CustomSelect from "../common/ui/CustomSelect/CustomSelect";
import ImageInput from "../common/ui/ImageInput";

export interface IPlayerAddProps {}

const options = [
  { value: "CenterForward", label: "Center forward" },
  { value: "GuardForward", label: "Guard forward" },
  { value: "Forward", label: "Forward" },
  { value: "Center", label: "Center" },
  { value: "Guard", label: "Guard" },
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
            <ImageInput />
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
