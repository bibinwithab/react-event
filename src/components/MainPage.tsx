import React from "react";
import styled from "styled-components";
import main from "../assets/Main_page/main.png";
import image1 from "../assets/Main_page/about_1.png";
import image2 from "../assets/Main_page/about_2.png";
import image3 from "../assets/Main_page/about_3.png";

const MainPage = () => {
  return (
    <MainContainer>
      <HeroSection>
        <MainProject>
          <ProjectTitle>
            <Strong>PROJECT</Strong>
            Lorum
          </ProjectTitle>
          <ProjectImage src={main} alt="Main Project" />
        </MainProject>
      </HeroSection>
      <Section>
        <AboutSection>
          <ImagesRow>
            <Image src={image1} alt="Image 1" />
            <Image src={image2} alt="Image 2" />
            <Image src={image3} alt="Image 3" />
          </ImagesRow>
          <AboutText>
            <Strong>About</Strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <b>READ MORE</b>
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

const Strong = styled.h1`
  font-size: 48px;
  color: grey;
`;
