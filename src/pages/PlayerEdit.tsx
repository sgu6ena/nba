import * as React from "react";
import styled from "styled-components";
import LayerPage from "../common/components/LayerPage";
import Path from "../common/components/path/path";
import * as vars from "../common/variables/colors";
import {FormPlayer} from "../modules/players/components/FormPlayer";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../core/redux/redux";


export function PlayerEdit() {
    const params = useParams();

    const { players } = useAppSelector(
        (state) => state.playerReducer
    );

    const thisPlayer = players.find((p) => p.id?.toString() === params.id);


    return (
        <LayerPage>
            <StyledBox>
                <Path type="player" title="Add New Player"/>
                <FormPlayer data={thisPlayer}/>
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
