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

const playerInit: IPlayer =  {
    id: 924,
    name: 'Грустный баскетболист',
    number: 12,
    position: 'Forward',
    team: 27,

    height: 199,
    weight: 87,
    avatarUrl: 'https://i.pinimg.com/originals/fe/fe/08/fefe087ef0c57e7e348c4babe7f9a953.png'
}


export function PlayerAdd(props: IPlayerAddProps) {

    return (
        <LayerPage>
            <StyledBox>
                <Path type="player" title="Add New Player"/>
                <FormPlayer data={playerInit}/>
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
