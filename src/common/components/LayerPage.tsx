import * as React from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import * as colors from "../variables/colors";
import * as sizes from "../variables/sizes";

interface ILayerPageProps {
  search?: boolean;
  paginate?: boolean;
}


const LayerPage: React.FunctionComponent<ILayerPageProps> = ({
  children,
  search,
}) => {
  return (
    <StyledLayer>
      <Header />
      <Sidebar />
      <main>
        <Page>
          <Content>{children}</Content>
        </Page>
      </main>
    </StyledLayer>
  )
};

export default LayerPage;


const StyledLayer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 80px auto;
  grid-template-columns: max-content auto;
  grid-template-areas:
    "header  header"
    "nav  main";
  header {
    grid-area: header;
  }
  nav {
    grid-area: nav;
  }

  main {
    background-color: ${colors.$lightestGrey1};
    display: flex;
    flex-direction: column;
    padding: 32px 80px;
    grid-area: main;
    overflow-y: scroll;
    @media screen and (max-width: ${sizes.$sm}) {
      padding: 20px 5px;
    }
  }
`;

const Page = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 32px;
`;

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media (max-width: ${sizes.$sm}) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2em;
  flex-direction: column;


`;

const Content2 = styled.div`
  display: grid;
  gap: 2em;
  
`