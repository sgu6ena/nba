import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useForm, Controller } from "react-hook-form";
import * as vars from "../assets/variables/variables";

import { ReactComponent as BasketIn } from "../assets/images/Basket-in.svg";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import Password from "../ui/Password";
import { useAppDispatch } from "../hooks/redux";
import ApiService from "../services/api";

import { setUser } from "../store/reducers/auth";
import Spinner from "../ui/spinner/spinner";

interface ILoginProps {}
const ErrorBox = styled.div`
  height: 2em;
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
    gap: 20px;
  }

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: #052587;
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
      padding: 0 0.5em;
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
  const api = new ApiService();

  const dispatch = useAppDispatch();

  const [isLoading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState("");
  const [result, setResult] = React.useState({});
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  React.useEffect(() => {
    JSON.stringify(result) ? setLoading(false) : setLoading(true);
  }, [result]);

  const loged = (login: string, password: string) => {
    setLoading(true);
    setError("");
    api
      .postLogin(login, password)
      .then((data: any) => {
        setResult(data);
        dispatch(
          setUser({
            name: data.name,
            token: data.token,
            avatarUrl: data.avatarUrl,
          })
        );
      })
      .catch((e) => {
        setError(e.message);
        console.log(e);
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

      {isLoading ? <Spinner /> : ""}
      <LoginBox>
        <h1>Sing in</h1>

        <ErrorBox> {isError ? isError : ""}</ErrorBox>
        <form
          onSubmit={handleSubmit(({ login, password }) =>
            loged(login, password)
          )}
        >
          <Controller
            name="login"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} label="Login" placeholder="Input login" />
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
        <BasketIn width="80%" type="submit" />
      </ImageBox>
    </div>
  );
};

export default Login;
