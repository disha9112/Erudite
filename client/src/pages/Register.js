import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  margin-top: -50px;
`;
const SignUp = styled.div`
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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // dispatch(loginStart());

    // try {
    //   axios
    //     .post("/auth/login", {
    //       email,
    //       password,
    //     })
    //     .then((res) => dispatch(loginSuccess(res.data.user)))
    //     .then(() => navigate("/"));
    // } catch (error) {
    //   dispatch(loginFailure());
    // }
  };

  return (
    <Container>
      <SignUp>
        <Title>Sign up</Title>
        <SubTitle>Start teaching and learning with the community!</SubTitle>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button>Sign up</Button>
      </SignUp>
    </Container>
  );
};

export default Register;
