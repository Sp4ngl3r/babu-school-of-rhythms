import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../../components/marginer";
import { theme } from "../../theme";
import { scroller } from "react-scroll/modules";
import { Link } from "react-router-dom";

const NavigationBarContainer = styled.div`
  position: sticky;
  overflow: hidden;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #9e645c;
  /* background: linear-gradient(90deg, #e9d8a6 0%, #0a9396 100%); */
`;

const CompanyBrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SectionHeadingButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: ${theme.primary};
    /* color: #200680; */
  }
`;

export function NavigationBar(props) {
  const isGalleryPage = props.isGalleryPage;

  const scrollingToSection = (section) => {
    switch (section) {
      case "about":
        scroller.scrollTo("about", {
          offset: -70,
          smooth: true,
          duration: 1500,
        });
        break;

      case "reviews":
        scroller.scrollTo("reviews", {
          offset: -70,
          smooth: true,
          duration: 2500,
        });
        break;

      case "more-about":
        scroller.scrollTo("more-about", {
          offset: -70,
          smooth: true,
          duration: 3000,
        });
        break;

      case "footer":
        scroller.scrollTo("footer", {
          offset: -70,
          smooth: true,
          duration: 4000,
        });
        break;

      default:
        scroller.scrollTo("top-section", {
          smooth: true,
          duration: 1500,
        });
    }
  };

  if (!isGalleryPage) {
    return (
      <NavigationBarContainer>
        <CompanyBrandContainer>
          <Logo inline />
        </CompanyBrandContainer>
        <AccessibilityContainer>
          <SectionHeadingButton
            small
            onClick={() => scrollingToSection("home")}
            class="active"
          >
            Home
          </SectionHeadingButton>
          <Marginer direction="horizontal" margin="9px" />

          <SectionHeadingButton
            small
            onClick={() => scrollingToSection("about")}
          >
            About
          </SectionHeadingButton>
          <Marginer direction="horizontal" margin="9px" />

          <SectionHeadingButton
            small
            onClick={() => scrollingToSection("more-about")}
          >
            More About
          </SectionHeadingButton>
          <Marginer direction="horizontal" margin="9px" />

          <Link to="/gallery">
            <SectionHeadingButton small>Gallery</SectionHeadingButton>
          </Link>
          <Marginer direction="horizontal" margin="9px" />

          <SectionHeadingButton
            small
            onClick={() => scrollingToSection("reviews")}
          >
            Reviews
          </SectionHeadingButton>
          <Marginer direction="horizontal" margin="9px" />

          <SectionHeadingButton
            small
            onClick={() => scrollingToSection("footer")}
          >
            Contact Us
          </SectionHeadingButton>
          <Marginer direction="horizontal" margin="9px" />
        </AccessibilityContainer>
      </NavigationBarContainer>
    );
  } else {
    return (
      <NavigationBarContainer>
        <CompanyBrandContainer>
          <Logo inline />
        </CompanyBrandContainer>
        <AccessibilityContainer>
          <Link to="/">
            <SectionHeadingButton small>Back to Home</SectionHeadingButton>
          </Link>
        </AccessibilityContainer>
      </NavigationBarContainer>
    );
  }
}
