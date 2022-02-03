import * as React from "react";
import { setUser } from "../core/auth";
import { useAppDispatch } from "../core/redux/redux";
import { useForm, Controller } from "react-hook-form";
import ApiService from "../api/api";
import { Link } from "react-router-dom";

import styled from "styled-components";
import * as colors from "../common/variables/colors";
import * as sizes from "../common/variables/sizes";

import { ReactComponent as BasketIn } from "../assets/images/Basket-in.svg";
import Button from "../common/ui/button/Button";
import Input from "../common/ui/input/Input";
import Password from "../common/ui/Password";
import Spinner from "../common/ui/spinner/spinner";

interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  const api = new ApiService();

  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = React.useState(false);
  const [formError, setFormError] = React.useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = async (data: { login: string; password: string }) => {
    setLoading(true);
    api
      .postLogin(data.login, data.password)
      .then((data) => dispatch(setUser(data)))
      .catch((e) => {
        setFormError(e.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "stretch",
        position: "relative",
      }}
    >
      {isLoading && <Spinner />}
      <LoginBox>
        <ErrorBox>
          {errors.login?.message} {formError && formError}
        </ErrorBox>
        <h1>Sing in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="login"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                label="Login"
                placeholder="Input login"
                error={errors.login && "Login is required"}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Password
                {...field}
                label="Password"
                placeholder="Input password"
                error={errors.password && "Password is required"}
              />
            )}
          />

          <Button type="submit">Sing in</Button>
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

const ErrorBox = styled.div`
  height: 2em;
  font-size: 14px;
`;
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  border: 0px solid red;
  flex-direction: column;
  form {
    padding: 10px;
    max-width: 370px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: #052587;
  }
  button {
    margin-top: 10px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${colors.$grey};
    a {
      padding: 0 0.5em;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      text-decoration-line: underline;
      color: ${colors.$red};
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
  @media screen and (max-width: ${sizes.$md}) {
    display: none;
  }
`;
