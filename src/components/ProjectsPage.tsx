import React from "react";
import styled from "styled-components";

const ProjectsPage = () => {
  return (
    <ProjectsContainer>
      <Heading>Our Projects</Heading>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage src="/path-to-sample-project-1.jpg" alt="Project 1" />
          <ProjectInfo>
            <ProjectTitle>Sample Project</ProjectTitle>
            <ViewMore>View More →</ViewMore>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/path-to-sample-project-2.jpg" alt="Project 2" />
          <ProjectInfo>
            <ProjectTitle>Sample Project</ProjectTitle>
            <ViewMore>View More →</ViewMore>
          </ProjectInfo>
        </ProjectCard>
        {/* Add more ProjectCard components as needed */}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsPage;

const ProjectsContainer = styled.div`
  padding: 40px 20px;
  background-color: #f8f8f8;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const ViewMore = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
