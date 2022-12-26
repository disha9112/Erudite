import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #ff3465;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
const Content = styled.div``;

const Comment = () => {
  return (
    <Container>
      <ProfilePic src="https://i.pinimg.com/originals/4d/b8/3d/4db83d1b757657acf5edc8bd66e50abf.jpg" />
      <Details>
        <Name>
          Jane Doe <Date> • 1 day ago</Date>
        </Name>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Content>
      </Details>
    </Container>
  );
};

export default Comment;
