import * as React from "react";
import Info from "./info/Info";
import Panel from "./panel/Panel";
import styled from "styled-components";


export interface IEditCardProps {
  title: string;
  place?: string;
  avatarUrl: string;
  type: "command" | "player";
}

const StyledEditCard = styled.div`
display: block;
width: 100%;
font-size: 24px;
`

const EditCard: React.FC<IEditCardProps> = ({
  title,
  place,
  avatarUrl,
  type,
}) => {
  return (
    <StyledEditCard>
      <Panel type={type} title={title} />
      <Info avatarUrl={avatarUrl} type={type} title={title}   place={place} />
    </StyledEditCard>
  );
};

export default EditCard;
