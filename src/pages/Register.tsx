import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import * as vars from "../assets/variables/variables";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import Password from "../ui/Password";
import { ReactComponent as BasketUp } from "../assets/images/Basket-up.svg";
import Spinner from "../ui/spinner/spinner";
import ApiService from "../services/api";
import { useAppDispatch } from "../hooks/redux";
import { setUser } from "../store/reducers/auth";

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
    gap: 10px;
  }

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: ${vars.$blue};
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
const ErrorBox = styled.div`
  height: 2em;
  font-size: 14px;
`;

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const api = new ApiService();

  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const [result, setResult] = React.useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      login: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: {
    name: string;
    login: string;
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    if (data.password === data.confirmPassword) {
      api
        .postRegister(data.login, data.password, data.name)
        .then((data) => dispatch(setUser(data)))
        .catch((e) => {
          setFormError(e.message);
        })
        .finally(() => setLoading(false));
    } else {
      setFormError("Пароли не совпадают");
      setLoading(false);
    }
  };

  return (
    <Page>
      <RegisterBox>
        {isLoading && <Spinner />}

        <h1>Sing up</h1>
        <ErrorBox>{formError && formError}</ErrorBox>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                label="Name"
                placeholder="Name"
                error={errors.name && "Name is required"}
              />
            )}
          />{" "}
          <Controller
            name="login"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                label="Login"
                placeholder="Login"
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
                placeholder="Password"
                error={errors.password && "Password is required"}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Password
                {...field}
                label="Enter your password again"
                placeholder="Confirm password"
                error={errors.confirmPassword && "Confirm password is required"}
              />
            )}
          />
          <Button type="submit">Sing up</Button>
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
