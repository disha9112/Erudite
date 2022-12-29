import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Comment from "./Comment";
import axios from "axios";

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

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        await axios
          .get(`/comments/${videoId}`)
          .then((res) => setComments(res.data.comments));
        console.log(comments);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        <ProfilePic src={currentUser.profilePic} />
        <Input placeholder="Add a new comment..." />
      </NewComment>
      <Hr />
      {/* <RemoveScrollBar /> */}
      <Wrapper>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Comments;
