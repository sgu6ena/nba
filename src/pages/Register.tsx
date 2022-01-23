import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import Password from "../ui/Password";
import { ReactComponent as BasketUp } from "../assets/images/Basket-up.svg";
import styled from "styled-components";
import * as vars from "../assets/variables/variables";

interface IRegisterProps {}

const Page = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: stretch;
`;
const RegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  border: 0px solid red;
  flex-direction: column;
  .form {
    padding: 10px;
    max-width: 370px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: #344472;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${vars.$grey};
    a {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      text-decoration-line: underline;
      color: ${vars.$red};
    }
  }
`;

const ImageBox = styled.div`
  display: flex;
  background: #f5fbff;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${vars.$md}) {
    display: none;
  }
`;

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

  return (
    <Page>
      <RegisterBox>
        <h1>Sing up</h1>
        <form className="form" >
          <Input label="Name" />
          <Input label="Login" />
          <Password label="Password" />
          <Password label="Enter your password again" />
          <Button>Sing up</Button>
        </form>
        <p>
          Allready a member? <Link to="/login"> Sign in</Link>
        </p>
      </RegisterBox>
      <ImageBox>
        <BasketUp width="80%" />
      </ImageBox>
    </Page>
  );
};

export default Register;
