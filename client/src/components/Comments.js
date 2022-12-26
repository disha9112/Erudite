import React from "react";
import styled from "styled-components";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Comment from "./Comment";

const Container = styled.div``;
const Wrapper = styled.div`
  overflow-y: scroll;
  height: 74vh;
`;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.soft};
  border: none;
  outline: none;
  background-color: transparent;
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <ProfilePic src="https://i.pinimg.com/originals/4d/b8/3d/4db83d1b757657acf5edc8bd66e50abf.jpg" />
        <Input placeholder="Add a new comment..." />
      </NewComment>
      <Hr />
      {/* <RemoveScrollBar /> */}
      <Wrapper>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Wrapper>
    </Container>
  );
};

export default Comments;
