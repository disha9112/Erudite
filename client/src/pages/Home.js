import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text};
`;

const Home = ({ type }) => {
  const [randomVideos, setRandomVideos] = useState([]);

  useEffect(() => {
    const fetchRandomVideos = async () => {
      axios
        .get(`/videos/${type}`)
        .then((res) => setRandomVideos(res.data.videos));
    };
    fetchRandomVideos();
  }, [type]);

  return (
    <Container>
      {randomVideos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
