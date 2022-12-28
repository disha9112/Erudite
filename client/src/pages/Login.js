import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: -40px;
  color: ${({ theme }) => theme.text};
`;
const SignIn = styled.div`
  flex: 2;
  align-items: center;
  height: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  max-width: 50%;
  padding: 50px;
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  margin: 25px 0;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  outline: none;
  border-radius: 3px;
  padding: 10px;
  margin: 10px 0;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #ff3465;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const Login = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("/auth/login", {
          email,
          password,
        })
        .then((res) => console.log(res.data));
    } catch (error) {}
  };

  return (
    <Container>
      <SignIn>
        <Title>Log in</Title>
        <SubTitle>Welcome back to Erudite!</SubTitle>
        {/* <Input placeholder="Name" onChange={(e) => setName(e.target.value)} /> */}
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button onClick={handleLogin}>Log in</Button>
      </SignIn>
    </Container>
  );
};

export default Login;
