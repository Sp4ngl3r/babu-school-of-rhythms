import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { AboutSection } from "./aboutSection";
import { DetailedSection } from "./detailedSection";
import { ReviewsSections } from "./reviewSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <AboutSection />
      <ReviewsSections />
      <DetailedSection/>
      <Footer/> 
    </PageContainer>
  );
}
