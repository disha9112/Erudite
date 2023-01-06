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
      await fetch(`http://localhost:8000/api/videos/${type}`, {
        method: "GET",
        // headers: {
        //   Authorization: localStorage.getItem("token"),
        // },
      })
        .then((res) => res.json())
        .then((data) => setVideos(data.videos));
      // .catch((err) => console.log(err));
    };
    const fetchTagVideos = async () => {
      fetch(`http://localhost:8000/api/videos/tag/${type}`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => setVideos(data.tagVideos));
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
      {videos && videos.length > 0 ? (
        videos.map((video) => <Card key={video._id} video={video} />)
      ) : (
        <Info>No videos to show</Info>
      )}
    </Container>
  );
};

export default Home;
