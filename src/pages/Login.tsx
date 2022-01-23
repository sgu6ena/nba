import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as BasketIn } from "../assets/images/Basket-in.svg";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import Password from "../ui/Password";
import * as vars from "../assets/variables/variables";

interface ILoginProps {}

const LoginBox = styled.div`
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

const Login: React.FC<ILoginProps> = (props) => {

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "stretch",
      }}
    >
      <LoginBox>
        <h1>Sing in</h1>
        <form  className="form">
          <Input label="Login" id="login"/>
          <Password label="Password" />
          <Button>Sing in</Button>
        </form>
        <p>
          Not a member yet? <Link to="/register"> Sign up</Link>
        </p>
      </LoginBox>
      <ImageBox>
        <BasketIn width="80%" />
      </ImageBox>
    </div>
  );
};

export default Login;
