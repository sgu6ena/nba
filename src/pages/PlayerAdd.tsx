import * as React from "react";
import styled from "styled-components";
import LayerPage from "../common/components/LayerPage";
import Path from "../common/components/path/path";
import * as vars from "../common/variables/colors";
import Input from "../common/ui/input/Input";
import CustomSelect from "../common/ui/CustomSelect/CustomSelect";
import ImageInput from "../common/ui/ImageInput";
import {FormPlayer} from "../modules/players/components/FormPlayer";
import {IPlayer} from "../modules/players/interfaces/IPlayer";

export interface IPlayerAddProps {
}


export function PlayerAdd(props: IPlayerAddProps) {

    return (
        <LayerPage>
            <StyledBox>
                <Path type="player" title="Add New Player"/>
                <FormPlayer />
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
