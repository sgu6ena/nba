import * as React from "react";
import Image from "../image/Image";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";


interface ICardProps {
  title: string;
  place?: string;
  subtitle: string;
  avatarUrl: string;
  type: "command" | "player";
}

const StyledCard = styled.div`
  height: 24em;
  width: 24em;
  background: ${vars.$gradient};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
   flex-grow: 1;
  flex-shrink: 8;

  img {
    padding-top: 10px;
    transition: 0.15s ease-out;
  }
  &:hover {
    img {
      transition: 0.3s ease-in-out;
      transform: scale(1.05);
    }
  }

  article {
    z-index: 5;
    height: 6em;
    padding: 1em;
    font-size: 1.3em;
    background: ${vars.$darkGrey};
    border-radius: 0px 0px 4px 4px;

    font-style: normal;
    font-weight: 500;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;

    h3 {
      margin:0;
      color: ${vars.$white};
      font-size: 1.25rem;
      span {
        color: ${vars.$red};
      }
    }

    div {
      font-size: 1em;
      color: ${vars.$lightGrey};
    }
  }
`;

const Card: React.FunctionComponent<ICardProps> = ({
  title,
  subtitle,
  place,
  avatarUrl,
  type,
}) => {
  return (
    <StyledCard>
      <Image avatarUrl={avatarUrl} title={title} type={type} />

      <article>
        <h3>
          {title}
          <span> {place}</span>
        </h3>
        <div>{subtitle}</div>
      </article>
    </StyledCard>
  );
};

export default Card;
