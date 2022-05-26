import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../theme";

const FooterContainer = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4e3c33;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

const FooterText = styled.h1`
  font-size: 25px;
  font-weight: 400;
  line-height: 1.2;
  color: #fff;
  margin: 0px;
`;

const CompanyDetailsContainer = styled.div`
  width: 95%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 11px;
  padding-right: 12px;
  padding-left: 12px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    padding-top: 15px;
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialIconsContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: ${theme.primary};
  font-size: 40px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 25px;

    @media screen and (max-width: 480px) {
      margin-right: 10px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }

  &:hover {
    color: #adadad;
  }
`;

const SocialIconLink = styled.a`
  color: ${theme.primary};
  font-size: 40px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 25px;

    @media screen and (max-width: 480px) {
      margin-right: 10px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }

  &:hover {
    color: #d2cef1;
  }
`;

const PrivacyContainerLink = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 24px;

    @media screen and (max-width: 480px) {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 9px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReservedText = styled.div`
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 11px;

  @media screen and (max-width: 480px) {
    font-size: 7px;
    text-align: center;
  }
`;

export function Footer(props) {
  return (
    <FooterContainer className="footer">
      <Marginer direction="vertical" margin="5em" />
      <Logo small />
      <Marginer direction="vertical" margin="1.5em" />
      <FooterText>Footer Text for</FooterText>
      <FooterText>Babu School of Rhythms</FooterText>
      <Marginer direction="vertical" margin="6em" />
      <FooterText>Connect Us</FooterText>
      <Marginer direction="vertical" margin="1em" />
      <SocialIconsContainer>
        <SocialIconLink href="https://instagram.com/babuschoolofrhythms?igshid=14glcicbygxk7">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIconLink>
        <SocialIconLink href="https://www.youtube.com/channel/UCWddMPl4M2TayT4qPmd8Onw">
          <FontAwesomeIcon icon={faYoutube} />
        </SocialIconLink>
        <SocialIconLink href="https://www.facebook.com/babuschoolofrhythm/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </SocialIconLink>
        <SocialIconLink
          href="mailto:babuschoolofrhythms123@gmail.com?subject=Inquiry about your Music class&body=Would love to connect...When shall I reach you??"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </SocialIconLink>
      </SocialIconsContainer>
      <Marginer direction="vertical" margin="6em" />
      <CompanyDetailsContainer>
        <PrivacyContainer>
          <PrivacyContainerLink>Privacy Policy</PrivacyContainerLink>
          <PrivacyContainerLink>Terms and Conditions</PrivacyContainerLink>
        </PrivacyContainer>
      </CompanyDetailsContainer>
      <RightsReservedText>
        &copy; 2022 - Babu School of Rhythms. All rights reserved.
      </RightsReservedText>
    </FooterContainer>
  );
}
