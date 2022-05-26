import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";
import { Marginer } from "../../components/marginer";
import { Service } from "../../components/service";

import AboutImage from "../../assets/pictures/about.jpg"
import JourneyImage from "../../assets/pictures/journey_of_babu.jpg";
import AchievementsImage from "../../assets/pictures/achievements.jpg";

const AboutContainer = styled(Element)`
  width: 100%;
  min-height: 1800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  /* background: linear-gradient(
    180deg,
    rgba(181, 131, 141, 0.9) 0%,
    rgba(181, 131, 141, 0.9) 90%,
    rgba(142, 171, 238, 0.9) 100%
  ); */
  background-color: rgba(55, 55, 55, 0.9);
`;

export function AboutSection(props) {
  return (
    <AboutContainer className="about">
      <SectionTitle>ABOUT OUR FOUNDER</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <Service
        imageUrl={AboutImage}
        title="ABOUT BABU SUKUMAR"
        details="Late Shri B S Sukumar was born on the 1st of February 1948 to R.V.Swaminathan and Subbulakshmi. In 1971 he began his first drum lessons in the Ruby Institute of Music under the guidance of Shri Venkataraghavan. 
                  Later he decided to take up drumming as his career. In 1975 , Sukumar joined the Blue Boys Band/Orchestra which was one of the most well known music teams in Bangalore. 
                  In 1976, Sukumar joined 'Talk of the Town' and continued playing for the next two years at the night club. 
                  During this time he met Manuel (drummer) who shared numerous tips about drumming. In 1980 , Sukumar joined Albert Victor's western group named Soft Rocks. They regularly played at the Gateway hotel (then known as East West). 
                  He also started freelancing the same year. During these years he met Micheal, Tony King and Jerry Domes-all drummers who influenced his drumming style further."
      />

      <Service
        imageUrl={JourneyImage}
        title="JOURNEY OF BABU SUKUMAR"
        details="He accompanied renowned Play Back singers Smt B K Sumitra and Shri Mysore Kumar with their team. He was also part of Smt Kasturi Shankar's Orchestra and he initiated the beginning of Adarsha Melody Makers. 
                  In 1986 , Sukumar rejoined the Blue Boys Band and continued to play with them until 1998. All through these years Sukumar continued to follow his greatest passion - Teaching. 
                  Subsequently he took up teaching full-time and started freelancing too. After teaching at various schools Sukumar concentrated on his institution which was the first ever school in Karnataka dedicated only to DRUMS in 1983 .
                  It is now a renowned drums school known as the BABU SCHOOL OF RHYTHMS which has trained more than 400 drummers.  The school is currently the examination centre for the prestigious Trinity College of London in Bangalore."
        isReversed
      />

      <Service
        imageUrl={AchievementsImage}
        title="ACHIEVEMENTS OF BABU SUKUMAR"
        details="In 2004 he collaborated with his son Shri Arun kumar, a renowned drummer himself, producing an album called the 'Songs of Spring'. He later was also a part of the GRAND JURY PANEL at a very popular singing reality show Zee Kannada 'SaReGaMaPa'. 
                  Sukumar was honoured with the prestigious State Award 'KARNATAKA KALASHREE', the first ever drummer to have received such an honour from the Government in 2017. 
                  Sukumar’s Babu School of Rhythms started Bengaluru Drum fest in the year 2019 to showcase the drummers all over the world which is first of its kind in Namma Bengaluru.
                  Drummer Babu, as he is fondly known by all,lived a passion filled life for music and teaching and has left a great legacy behind to the entire Drumming Community, especially from the state of Karnataka. For his impeccable service to the field of drumming!"
      />
    </AboutContainer>
  );
}
