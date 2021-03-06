import * as React from "react";
import styled from "styled-components";
import LayerPage from "../common/components/LayerPage";
import Path from "../common/components/path/path";
import * as vars from "../common/variables/colors";
import {FormTeam} from "../modules/teams/components/FormTeam";


export function CommandAdd() {
    return (
        <LayerPage>
            <StyledBox>
                <Path type="player" title="Add New Team"/>
                <FormTeam />
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