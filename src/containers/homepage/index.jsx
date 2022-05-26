import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { NavigationBar } from "../../components/navigationBar";
import { AboutSection } from "./aboutSection";
import { DetailedSection } from "./detailedSection";
import { ReviewsSections } from "./reviewSection";
import { TopSection } from "./topSection";

import BackgroundImage from "../../assets/pictures/music_background.jpeg";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LandingPage = styled.div``;

const MajorSections = styled.div`
  background-image: url(${BackgroundImage});
  background-attachment: fixed;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <NavigationBar isGalleryPage={false} />
      <LandingPage>
        <TopSection />
        <MajorSections>
          <AboutSection />
          <DetailedSection />
          <ReviewsSections />
        </MajorSections>
        <Footer />
      </LandingPage>
    </PageContainer>
  );
}
