import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  background-color: #999;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;
const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Description = styled.div`
  height: 36px;
  border-radius: 50%;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 900;
  &:hover {
    color: #ff3465;
  }
`;
const Channel = styled.h2`
  font-size: 14px;
  color: #ff3465;
  margin: 9px 0px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Card = () => {
  return (
    <StyledLink to="/video/test">
      <Container>
        <Thumbnail src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80" />
        <Details>
          <Profile src="https://i.pinimg.com/originals/4d/b8/3d/4db83d1b757657acf5edc8bd66e50abf.jpg" />
          <Description>
            <Title>Test Video</Title>
            <Channel>Test Channel • 150,000 views</Channel>
          </Description>
        </Details>
      </Container>
    </StyledLink>
  );
};

export default Card;
