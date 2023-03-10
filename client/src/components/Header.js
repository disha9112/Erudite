import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import { useSelector } from "react-redux";

const Container = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgMenu};
  color: ${({ theme }) => theme.text};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 14.5px 0px;
  gap: 10px;
  cursor: pointer;
  &:hover {
    color: #ff3465;
  }
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
const Search = styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  background-color: transparent;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ProfilePic = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Header = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  const [query, setQuery] = useState("");

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          ></Input>
          <YoutubeSearchedForIcon
            onClick={() => navigate(`/search?search=${query}`)}
          />
        </Search>
        {currentUser ? (
          <User>
            <ProfilePic src={currentUser.profilePic} />
            {currentUser.name}
          </User>
        ) : (
          <StyledLink to="/login">
            <Item>
              <LoginIcon />
              Login
            </Item>
          </StyledLink>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;
