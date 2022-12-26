import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text};
`;

const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;
