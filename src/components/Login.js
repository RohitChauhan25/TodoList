import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  FormTitle,
  Input,
  InputWrap,
  Label,
  LoginButton,
} from "../styles/loginStyle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TodoRoute } from "../constant/routes";
import { LoginInUser } from "../redux/slice/userSlice";
import { Select } from "antd";

const Login = ({ info }) => {
  const [selectedUser, setSelectedUSer] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(LoginInUser(selectedUser));
    navigate(TodoRoute?.path);
  };
  return (
    <Container>
      <Form>
        <InputWrap>
          <FormTitle>Login </FormTitle>
          <Label>Select user to login </Label>
          <Select
            placeholder="select user"
            options={info?.map((user) => {
              return {
                label: user?.name,
                value: user?.id,
                ...user,
              };
            })}
            onChange={(value, user) => setSelectedUSer(user)}
          />
        </InputWrap>

        <LoginButton onClick={handleLogin} type="button">
          Get Started
        </LoginButton>
      </Form>
    </Container>
  );
};

export default Login;
