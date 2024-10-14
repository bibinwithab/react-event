import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import GalleryPage from "./components/GalleryPage";
import CertificationsPage from "./components/CertificationsPage";
import styled from "styled-components";
import logo from './assets/Main_page/logo.png'
import ProjectsPage from "./components/ProjectsPage";

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Logo>
            <LogoImage src={logo} alt="Logo" />
          </Logo>
          <NavBar>
            <StyledLink to="/">Main</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/certifications">Certifications</StyledLink>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </NavBar>
        </Header>

        <Content>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/projects" element={ProjectsPage}/>
            {/* more routes */}
          </Routes>
        </Content>
        <Footer>
          <p>&copy; 2024 All Rights Reserved</p>
        </Footer>
      </AppContainer>
    </Router>
  );
};

export default App;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
`;

const NavBar = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: #333;
`;

const Footer = styled.footer`
  padding: 20px;
  background: black;
  color: grey;
  text-align: center;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the main content takes up full viewport height */
`;

const Content = styled.div`
  flex: 1; /* This ensures the content expands to fill available space */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;  /* Adjust the size according to your preference */
  height: auto;
`;