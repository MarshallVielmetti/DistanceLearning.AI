import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import GetPayload from "Components/Protected Route/GetPayload";

import {
  Container,
  Header,
  InputContainer,
  InputTag,
  StyledInput,
  BackLink,
  BackContainer,
  BackArrow,
  ActionContainer,
  ActionButton,
  ActionRows,
  ForgotPassword,
  ForgotSignin,
} from "Components/Auth Components/Shared";
import { Spacer } from "Components/Shared";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory("");

  //If token, login. At some point, add function to renew token if successful.
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const sendToken = `Bearer ${token}`;
      fetch("http://localhost:5000/API/authenticate", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { Authorization: sendToken },
      }).then((res) => console.log(res));
    }
  }, []);

  const handleSubmit = async () => {
    if (email !== "" && password !== "") {
      var body = JSON.stringify({ email: email, password: password });
      const response = await fetch("http://localhost:5000/API/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        contentType: "application/JSON",
        accept: "application/JSON",
        body: body,
      });

      console.log(response);

      const data = await response.json();
      const status = response.status;

      if (status === 200) {
        //Succesfully logged in
        sessionStorage.setItem("token", data.token);

        let payload = GetPayload(data.token);
        if (payload.accountType === "Teacher") {
          history.push("/teacher/home");
        } else if (payload.accountType === "Student") {
          history.push("/student/home");
        } else {
          console.log("Invalid Account Type");
        }
      } else {
        console.log(status);
      }
    } else {
      console.log("Need email and password.");
    }
  };
  return (
    <Container>
      <BackContainer>
        <BackLink to="/">
          <BackArrow />
        </BackLink>
      </BackContainer>

      <Header>Sign In</Header>
      <InputContainer>
        <InputTag />
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputTag />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <Spacer />
      <ActionContainer>
        <ActionRows>
          <Spacer num="3" />
          <ForgotPassword to="/reset-password">Forgot Password?</ForgotPassword>
          <Spacer num="1" />
          <ActionButton onClick={handleSubmit}>Sign In</ActionButton>
          <Spacer num="3" />
        </ActionRows>
        <Spacer />
        or
        <ActionRows>
          <Spacer />
          <ForgotSignin to="/sign-up">Sign Up</ForgotSignin>
          <Spacer />
        </ActionRows>
        <Spacer />
      </ActionContainer>
      <Spacer />
    </Container>
  );
};

export default Signin;
