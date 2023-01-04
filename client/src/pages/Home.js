import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  /* min-height: 100vh; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text};
`;
const Info = styled.h2`
  color: ${({ theme }) => theme.text};
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      axios.get(`/videos/${type}`).then((res) => setVideos(res.data.videos));
    };
    const fetchTagVideos = async () => {
      axios
        .get(`/videos/tag/${type}`)
        .then((res) => setVideos(res.data.tagVideos));
    };

    if (
      type !== "random" &&
      type !== "trending" &&
      type !== "followersVideos"
    ) {
      fetchTagVideos();
    } else {
      fetchVideos();
    }
  }, [type]);

  return (
    <Container>
      {videos.length !== 0 ? (
        videos.map((video) => <Card key={video._id} video={video} />)
      ) : (
        <Info>No videos to show</Info>
      )}
      {/* {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))} */}
    </Container>
  );
};

export default Home;
