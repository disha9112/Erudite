import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
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

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchCommentDetails = async () => {
      await axios
        .get(`/users/find/${comment.userId}`)
        .then((res) => setChannel(res.data.fetchedUser));
    };
    fetchCommentDetails();
  }, [comment.userId]);

  return (
    <Container>
      <ProfilePic src={channel.profilePic} />
      <Details>
        <Name>
          {channel.name} <Date> • {moment(comment.createdAt).fromNow()}</Date>
        </Name>
        <Content>{comment.content}</Content>
      </Details>
    </Container>
  );
};

export default Comment;
