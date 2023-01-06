import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  height: auto;
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

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    const fetchChannel = async () => {
      fetch(`https://erudite-live.vercel.app/api/users/find/${video.userId}`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => setChannel(data.fetchedUser));
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <StyledLink to={`/video/${video._id}`}>
      <Container>
        <Thumbnail type={type} src={video.thumbnail} />
        <Details>
          <Profile type={type} src={channel.profilePic} />
          <Description>
            <Title>{video.title}</Title>
            <Channel>
              {channel.name} • {video.views} views •{" "}
              {moment(video.createdAt).fromNow()}
            </Channel>
          </Description>
        </Details>
      </Container>
    </StyledLink>
  );
};

export default Card;
