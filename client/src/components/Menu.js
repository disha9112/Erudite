import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ComputerIcon from "@mui/icons-material/Computer";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import SecurityIcon from "@mui/icons-material/Security";
import DatasetIcon from "@mui/icons-material/Dataset";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import BugReportIcon from "@mui/icons-material/BugReport";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

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

const Menu = ({ theme, setTheme }) => {
  return (
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
            <HomeIcon color="#ff3465" />
            Home
          </Item>
        </StyledLink>
        <StyledLink to="/login">
          <Item>
            <LoginIcon />
            Login
          </Item>
        </StyledLink>
        <Hr />
        <Item>
          <PsychologyIcon />
          AI/ML
        </Item>
        <Item>
          <CurrencyBitcoinIcon />
          Blockchain
        </Item>
        <Item>
          <CloudIcon />
          Cloud Computing
        </Item>
        <Item>
          <DatasetIcon />
          Data Science
        </Item>
        <Item>
          <ComputerIcon />
          Development
        </Item>
        <Item>
          <RssFeedIcon />
          IoT
        </Item>
        <Item>
          <CodeIcon />
          Programming
        </Item>
        <Item>
          <SecurityIcon />
          Security
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item onClick={() => setTheme(!theme)}>
          <ToggleOnIcon />
          Toggle Theme
        </Item>
        <Item>
          <BugReportIcon />
          Report
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
