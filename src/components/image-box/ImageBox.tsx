import * as React from "react";
import styled from "styled-components";
import * as colors from "../../сommon/variables/colors";
import * as sizes from "../../сommon/variables/sizes";

interface IImageBoxProps {
  title: string;
  description: string;
}

const ImageBox: React.FunctionComponent<IImageBoxProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <Box>
      {children}
      <h2>{title}</h2>
      <p>{description}</p>
    </Box>
  );
};

export default ImageBox;

const Box = styled.div`
  padding: 50px 100px;
  border-radius: 15px;
  background-color: ${colors.$white};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${sizes.$md}) {
    border-radius: 0;
    padding: 20px 40px;
  }
  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 2.4em;
    line-height: 1.5em;
    margin-top: 48px;
    margin-bottom: 24px;
    color: ${colors.$lightRed};
  }

  p {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6em;
    line-height: 1.5;
    display: flex;
    align-items: flex-end;
    color: ${colors.$grey};
  }
`;
