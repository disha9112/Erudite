import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const search = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch(
        `https://erudite-live.vercel.app/api/videos/search${search}`,
        {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();
      setVideos(data.searchedVideos);
    };
    fetchVideos();
  }, [search]);

  return (
    <Container>
      {videos && videos.length > 0 ? (
        videos.map((video) => (
          <>
            <Card key={video._id} video={video} />
          </>
        ))
      ) : (
        <h1>No video to show</h1>
      )}
    </Container>
  );
};

export default Search;
