import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";
// import { toast, ToastContainer } from "react-toastify";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkIcon from "@mui/icons-material/Link";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Comments from "../components/Comments";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { follow } from "../redux/userSlice";
import { fetchSuccess, like } from "../redux/videoSlice";

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
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  console.log(path);
  const [channel, setChannel] = useState({});
  const [copied, setCopied] = useState(false);

  const handleLike = async () => {
    if (currentUser._id) {
      await fetch(
        `https://erudite-live.vercel.app/api/users/like/${currentVideo._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
        // .then((res) => res.json())
        .then(() => dispatch(like(currentUser._id)));
    }
  };
  const handleFollow = async () => {
    currentUser.followedUsers.includes(channel._id)
      ? await fetch(
          `https://erudite-live.vercel.app/api/users/unfollow/${channel._id}`,
          {
            method: "PUT",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        ).then(() => dispatch(follow(channel._id)))
      : await fetch(
          `https://erudite-live.vercel.app/api/users/follow/${channel._id}`,
          {
            method: "PUT",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        ).then(() => dispatch(follow(channel._id)));
  };
  const copyUrl = () => {
    const element = document.createElement("input");
    element.value = window.location.href;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    setCopied(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await fetch(
          `https://erudite-live.vercel.app/api/videos/find/${path}`,
          {
            method: "GET",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        ).then((res) => res.json());
        // setVideo(videoRes.data.fetchedVideo);
        const channelRes = await fetch(
          `https://erudite-live.vercel.app/api/users/find/${videoRes.fetchedVideo.userId}`,
          {
            method: "GET",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        ).then((res) => res.json());
        setChannel(channelRes.fetchedUser);
        dispatch(fetchSuccess(videoRes.fetchedVideo));
        console.log(videoRes.fetchedVideo);

        await fetch(
          `https://erudite-live.vercel.app/api/videos/view/${videoRes.fetchedVideo._id}`,
          {
            method: "PUT",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  return (
    <Container>
      {/* <ToastContainer /> */}
      {currentVideo ? (
        <>
          <Content>
            <VideoWrapper>
              <VideoFrame src={currentVideo.videoUrl} controls />
              {/* <iframe
            width="100%"
            height="350px"
            // src={video.videoUrl}
            src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="React Video Sharing App UI Design | Youtube UI Clone with React"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
            </VideoWrapper>
            <Title>{currentVideo.title}</Title>
            <Details>
              <Info>
                {currentVideo.views} views •{" "}
                {moment(currentVideo.createdAt).fromNow()}
              </Info>
              <Buttons>
                {currentUser === null ? (
                  <Button>
                    {currentVideo.likes.length}
                    <FavoriteBorderIcon />
                  </Button>
                ) : (
                  <Button onClick={handleLike}>
                    {currentVideo.likes?.includes(currentUser._id) ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}{" "}
                    {currentVideo.likes?.length}
                  </Button>
                )}
                {/* <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser._id) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}{" "}
              {currentVideo.likes?.length}
            </Button> */}
                <Button onClick={copyUrl}>
                  {" "}
                  {!copied ? "" : "Copied URL!"}
                  <LinkIcon />
                </Button>
                <Button>
                  {currentUser === null ? (
                    <BookmarkBorderIcon />
                  ) : currentUser.followedUsers?.includes(channel._id) ? (
                    <BookmarkIcon />
                  ) : (
                    <BookmarkBorderIcon onClick={handleFollow} />
                  )}
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
            <VideoInfo>{currentVideo.info}</VideoInfo>
          </Content>
          <CommentsContainer>
            <Comments videoId={currentVideo._id} />
          </CommentsContainer>
        </>
      ) : (
        <h1>No video to show</h1>
      )}
    </Container>
  );
};

export default Video;
