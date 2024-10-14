import React from "react";
import styled from "styled-components";

const GalleryPage = () => {
  return (
    <MainSection>
    <h1>Photo Gallery</h1>
    <GalleryGrid>
      <GalleryItem>
        <GalleryImage src="/path-to-image1.jpg" alt="Gallery Image 1" />
      </GalleryItem>
      {/* More gallery items */}
    </GalleryGrid>
  </MainSection>
  );
};

export default GalleryPage;


const MainSection = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

const GalleryItem = styled.div``;

const GalleryImage = styled.img`
  max-width: 100%;
  height: auto;
`;
