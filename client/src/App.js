import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Video from "./pages/Video";
import Menu from "./components/Menu";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Login from "./pages/Login";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
`;
const Main = styled.div`
  flex: 6;
`;
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 22px 96px;
`;

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu theme={theme} setTheme={setTheme} />
          <Main>
            <Header />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route
                    path="/trending"
                    index
                    element={<Home type="trending" />}
                  />
                  <Route
                    path="/following"
                    index
                    element={<Home type="followersVideos" />}
                  />
                  <Route path="/search" index element={<Search />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
