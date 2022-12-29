import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkIcon from "@mui/icons-material/Link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Comments from "../components/Comments";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchSuccess } from "../redux/videoSlice";

const Container = styled.div`
  display: flex;
  gap: 24px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  min-height: 100vh;
`;
const Content = styled.div`
  flex: 5;
`;
const CommentsContainer = styled.div`
  flex: 3;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 20px;
  margin-bottom: 0px;
  color: #ff3465;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  margin: 10px 0;
  color: ${({ theme }) => theme.textSoft};
`;
const VideoInfo = styled.div`
  margin: 15px 0;
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ff3465;
  cursor: pointer;
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const ChannelDetails = styled.div`
  display: grid;
`;
const ChannelName = styled.span`
  font-weight: 500;
  //
`;
// const ChannelCounter = styled.span`
//   margin-top: 5px;
//   margin-bottom: 20px;
//   color: ${({ theme }) => theme.textSoft};
//   font-size: 12px;
// `;
// const ChannelDescription = styled.p`
//   font-size: 14px;
// `;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Span = styled.span`
  color: #ff3465;
`;

const Video = () => {
  // const { currentUser } = useSelector((state) => state.user);
  // const { currentVideo } = useSelector((state) => state.video);
  // const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  console.log(path);

  const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        setVideo(videoRes.data.fetchedVideo);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.fetchedVideo.userId}`
        );
        setChannel(channelRes.data.fetchedUser);
        // dispatch(fetchSuccess(videoRes.fetchedVideo.data));
      } catch (err) {}
    };
    fetchData();
  }, [path]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="350px"
            // src={video.videoUrl}
            src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="React Video Sharing App UI Design | Youtube UI Clone with React"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>{video.title}</Title>
        <Details>
          <Info>
            {video.views} views • {moment(video.createdAt).fromNow()}
          </Info>
          <Buttons>
            <Button>
              <FavoriteBorderIcon /> {video.likes?.length}
            </Button>
            <Button>
              <LinkIcon />
            </Button>
            <Button>
              <BookmarkIcon />
            </Button>
          </Buttons>
        </Details>
        <Channel>
          <ChannelInfo>
            <Image src={channel.profilePic} />
            <ChannelDetails>
              <ChannelName>
                Uploaded by <Span>{channel.name}</Span>
              </ChannelName>
              <ChannelName>{channel.followers} Followers</ChannelName>
            </ChannelDetails>
          </ChannelInfo>
        </Channel>
        <VideoInfo>{video.info}</VideoInfo>
      </Content>
      <CommentsContainer>
        <Comments></Comments>
      </CommentsContainer>
    </Container>
  );
};

export default Video;
