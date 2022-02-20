import * as React from "react";
import Image from "../image/Image";
import styled from "styled-components";
import * as vars from "../../variables/colors";
import * as sizes from "../../variables/sizes";
import {Link} from "react-router-dom";


interface ICardProps {
    title: string;
    place?: string;
    subtitle: string;
    avatarUrl: string | null | undefined;
    type: "command" | "player";
    id?: string | number;
}

const StyledCard = styled.div`
  //max-width: 400px;
  flex-grow: 1;
  flex-shrink: 1;
  height:24em ;
  width: 20em;
  background: ${vars.$gradient};
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  img, svg {
    padding-top: 10px;
    transition: 0.15s ease-out;
  }

  &:hover {
    img, svg {
      transition: 0.3s ease-in-out;
      transform: scale(1.1);
    }
  }

  article {

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
      margin: 0;
      color: ${vars.$white};
      font-size: 1.25rem;
      @media (max-width: ${sizes.$md}) {
        font-size: 1.15rem;
      }
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
                                                       id
                                                   }) => {
    return (
        <Link to={`${id}`} className={"flex-link"}>
            <StyledCard>
                <Image avatarUrl={avatarUrl} title={title} type={type}/>
                <article>
                    <h3>
                        {title}
                        <span> {place}</span>
                    </h3>
                    <div>{subtitle}</div>
                </article>
            </StyledCard>
        </Link>
    );
};

export default Card;
