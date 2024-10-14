import React from "react";
import styled from 'styled-components'

const MainPage = () => {
  return (
    <MainContainer>
      <HeroSection>
        <MainProject>
          <ProjectTitle>
            PROJECT <strong>Lorum</strong>
          </ProjectTitle>
          <ProjectImage src="/path-to-image.jpg" alt="Main Project" />
        </MainProject>
      </HeroSection>
      <Section>
        <AboutSection>
          <ImagesRow>
            <Image src="/path-to-image1.jpg" alt="Image 1" />
            <Image src="/path-to-image2.jpg" alt="Image 2" />
          </ImagesRow>
          <AboutText>
            <h2>About</h2>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </AboutText>
        </AboutSection>
      </Section>
      {/* Other sections... */}
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 60px;
`;

const MainProject = styled.div``;

const ProjectTitle = styled.h1`
  font-size: 48px;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Section = styled.section`
  padding: 40px 20px;
`;

const AboutSection = styled.div`
  display: flex;
`;

const ImagesRow = styled.div`
  flex: 1;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const AboutText = styled.div`
  flex: 1;
  padding-left: 20px;
`;
