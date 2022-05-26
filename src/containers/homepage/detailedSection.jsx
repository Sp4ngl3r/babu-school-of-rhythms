import React from "react";
import Element from "react-scroll/modules/components/Element";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import DetailedSectionImageUrl from "../../assets/pictures/DrumFest.jpg";
import { Marginer } from "../../components/marginer";

const MoreDetailsContainer = styled(Element)`
  min-height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: linear-gradient(
    180deg,
    rgba(142, 171, 238, 0.95) 0%,
    rgba(142, 171, 238, 0.95) 84%,
    rgba(165, 129, 206, 0.9) 100%
  ); */
  background-color: rgba(55, 55, 55, 0.9);
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 70%;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap-reverse;
    max-width: 70%;
  }
`;

const DetailsText = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.4;
  color: #fff;
  text-align: justify;
`;

const DetailsImage = styled.img`
  width: 600px;
  height: 350px;
  margin-left: 4em;

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 200px;
    margin-left: 0;
  }
`;

export function DetailedSection(props) {
  return (
    <MoreDetailsContainer className="more-about">
      <Marginer direction="vertical" margin="2em" />
      <SectionTitle>More About BSOR</SectionTitle>
      <DetailsContainer>
        <DetailsText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. {<br />}
          {<br />}Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.{<br />}
          {<br />}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. {<br />}
          {<br />}Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.{<br />}
          {<br />}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </DetailsText>
        <DetailsImage src={DetailedSectionImageUrl} />
      </DetailsContainer>
    </MoreDetailsContainer>
  );
}
