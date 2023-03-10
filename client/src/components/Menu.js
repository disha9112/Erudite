import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ComputerIcon from "@mui/icons-material/Computer";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import SecurityIcon from "@mui/icons-material/Security";
import DatasetIcon from "@mui/icons-material/Dataset";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import Create from "./Create";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgMenu};
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 20px;
`;
const Brand = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text};
`;
const Tagline = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;
const Span = styled.div`
  color: #ff3465;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 14.5px 0px;
  gap: 10px;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    color: #ff3465;
  }
`;
const Hr = styled.div`
  border: 0.5px solid ${({ theme }) => theme.soft};
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
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  margin: 14.5px 0px;
  gap: 10px;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    color: #ff3465;
  }
`;

const Menu = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logOut({}));
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <StyledLink to="/">
            <Brand>
              <Span>E</Span>RUDITE
            </Brand>
            <Tagline>Learn everyday!</Tagline>
          </StyledLink>
          <StyledLink to="/">
            <Item>
              <HomeIcon />
              Home
            </Item>
          </StyledLink>
          <StyledLink to="/trending">
            <Item>
              <WhatshotIcon />
              Trending
            </Item>
          </StyledLink>
          <StyledLink to="/following">
            <Item>
              <BookmarkIcon />
              Following
            </Item>
          </StyledLink>
          <Hr />
          <StyledLink to="/ai-ml">
            <Item>
              <PsychologyIcon />
              AI/ML
            </Item>
          </StyledLink>
          <StyledLink to="/blockchain">
            <Item>
              <CurrencyBitcoinIcon />
              Blockchain
            </Item>
          </StyledLink>
          <StyledLink to="/cloud">
            <Item>
              <CloudIcon />
              Cloud
            </Item>
          </StyledLink>
          <StyledLink to="/data-science">
            <Item>
              <DatasetIcon />
              Data Science
            </Item>
          </StyledLink>
          <StyledLink to="/development">
            <Item>
              <ComputerIcon />
              Development
            </Item>
          </StyledLink>
          <StyledLink to="/iot">
            <Item>
              <RssFeedIcon />
              IoT
            </Item>
          </StyledLink>
          <StyledLink to="/programming">
            <Item>
              <CodeIcon />
              Programming
            </Item>
          </StyledLink>
          <StyledLink to="/security">
            <Item>
              <SecurityIcon />
              Security
            </Item>
          </StyledLink>
          <Hr />
          {!currentUser ? (
            ""
          ) : (
            <div>
              {/* <StyledLink to="/login"> */}
              <Button onClick={handleLogout}>
                <LogoutIcon />
                Logout
              </Button>
              {/* </StyledLink> */}
              <Item onClick={() => setOpen(true)}>
                <VideoCallIcon />
                Create
              </Item>
            </div>
          )}
          <Item onClick={() => setTheme(!theme)}>
            <ToggleOnIcon />
            Toggle Theme
          </Item>
        </Wrapper>
      </Container>
      {open && <Create setOpen={setOpen} />}
    </>
  );
};

export default Menu;
