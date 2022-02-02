import * as React from "react";
import styled from "styled-components";
import * as vars from "../../../assets/variables/variables";
import Path from "../../path/path";
// import "./styles.scss";

export interface IPanelProps {
  title: string;
  type: string;
}

const StyledPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${vars.$white};
  border: 0.5px solid ${vars.$lightGrey};
  border-radius: 10px 10px 0px 0px;
  height: 69px;
  padding: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and (max-width: ${vars.$md}) {
    border-radius: 0;
  }

  .btn {
    border: none;
    background-color: transparent;
    transition: all 0.2s;
    cursor: pointer;
  }
  .btn:hover {
    transform: scale(1.3);
    transition: all 0.2s;
  }
  .pensil::before {
    content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.7089 5.63126C21.0989 6.02127 21.0989 6.65127 20.7089 7.04127L18.8789 8.87126L15.1289 5.12126L16.9589 3.29126C17.1458 3.10401 17.3994 2.99878 17.6639 2.99878C17.9285 2.99878 18.1821 3.10401 18.3689 3.29126L20.7089 5.63126ZM2.99878 20.5013V17.4613C2.99878 17.3213 3.04878 17.2013 3.14878 17.1013L14.0588 6.19131L17.8088 9.94131L6.88878 20.8513C6.79878 20.9513 6.66878 21.0013 6.53878 21.0013H3.49878C3.21878 21.0013 2.99878 20.7813 2.99878 20.5013Z' fill='%239C9C9C'/%3e%3c/svg%3e ");
  }
  .trash::before {
    content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.5001 4H18.0001C18.5501 4 19.0001 4.45 19.0001 5C19.0001 5.55 18.5501 6 18.0001 6H6.00012C5.45012 6 5.00012 5.55 5.00012 5C5.00012 4.45 5.45012 4 6.00012 4H8.50012L9.21012 3.29C9.39012 3.11 9.65012 3 9.91012 3H14.0901C14.3501 3 14.6101 3.11 14.7901 3.29L15.5001 4ZM8.00004 21C6.90004 21 6.00004 20.1 6.00004 19V9.00004C6.00004 7.90004 6.90004 7.00004 8.00004 7.00004H16C17.1 7.00004 18 7.90004 18 9.00004V19C18 20.1 17.1 21 16 21H8.00004Z' fill='%23E4163A'/%3e%3c/svg%3e ");
  }
`;

const Panel: React.FC<IPanelProps> = ({ type, title }) => {
  return (
    <StyledPanel>
      <Path title={title} type={type}/>
      <div>
        <button className="btn pensil" title="edit"></button>
        <button className="btn trash" title="delete"></button>
      </div>
    </StyledPanel>
  );
};

export default Panel;
