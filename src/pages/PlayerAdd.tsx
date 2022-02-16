import * as React from "react";
import styled from "styled-components";
import LayerPage from "../common/components/LayerPage";
import Path from "../common/components/path/path";
import * as vars from "../common/variables/colors";
import {FormPlayer} from "../modules/players/components/FormPlayer";


export function PlayerAdd() {
const data = {"id": 925,
        "name": "Клевая прическа",
        "number": 13,
        "position": "Forward",
        "team": 27,
        "birthday": "2000-02-03T21:35:11.917",
        "height": 199,
        "weight": 87,
        "avatarUrl": "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4299.png"
}
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
