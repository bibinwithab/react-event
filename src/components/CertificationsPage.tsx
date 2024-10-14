import React from "react";
import styled from "styled-components";

const CertificationsPage = () => {
  return (
    <MainSection>
      <Title>
        <Strong>Company</Strong>
        <br></br> Certifications
      </Title>
    </MainSection>
  );
};

export default CertificationsPage;

const MainSection = styled.section`
  text-align: left;
  padding: 80px 20px;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const Strong = styled.strong`
  color: grey
`;
