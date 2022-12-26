import React from "react";
import styled from "styled-components";
// import LoginIcon from "@mui/icons-material/Login";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";

const Container = styled.div`
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
// const Item = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 1rem;
//   margin: 14.5px 0px;
//   gap: 10px;
//   cursor: pointer;
// `;
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
`;
const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  background-color: transparent;
`;
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"></Input>
          <YoutubeSearchedForIcon />
        </Search>
        {/* <Item>
          <LoginIcon />
          Login
        </Item> */}
      </Wrapper>
    </Container>
  );
};

export default Header;
