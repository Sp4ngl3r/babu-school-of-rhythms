import React from "react";
import { Element } from "react-scroll/modules";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import BackgroundImage from "../../assets/pictures/babu70-all-snares.jpg";
import { Button } from "../../components/button";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: url(${BackgroundImage}) no-repeat center center fixed;
  position: relative;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CaptionText = styled.h1`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  margin: 0px;
  text-align: center;
`;

const DownArrowComponentContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
`;

export function TopSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <Element className="top-section">
      <TopContainer>
        <BackgroundFilter>
          {isMobile ? (
            <Marginer direction="vertical" margin="5em" />
          ) : (
            <Marginer direction="vertical" margin="13em" />
          )}
          <Logo />
          <Marginer direction="vertical" margin="2em" />
          <CaptionText>Short Description about the school</CaptionText>
          <CaptionText>in one or two lines</CaptionText>
          <Marginer direction="vertical" margin="7em" />
          <Button>Join us</Button>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
