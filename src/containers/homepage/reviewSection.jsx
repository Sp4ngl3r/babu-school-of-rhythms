import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import Element from "react-scroll/modules/components/Element";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";

import "pure-react-carousel/dist/react-carousel.es.css";

import UserImage1 from "../../assets/pictures/profile_picture_1.jpg";
import UserImage2 from "../../assets/pictures/profile_picture_2.jpg";
import UserImage3 from "../../assets/pictures/profile_picture_3.jpg";
import UserImage4 from "../../assets/pictures/profile_picture_4.jpg";
import { theme } from "../../theme";

const ReviewsContainer = styled(Element)`
  height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(165, 129, 206, 0.9); */
  background-color: rgba(55, 55, 55, 0.9);
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 75%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 2px;
    }
  }

  .carousel__dot--selected {
    background-color: ${theme.primary};
  }
`;

export function ReviewsSections(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer className="reviews">
      <SectionTitle>Reviews about the class</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideHeight={isMobile ? 170 : 270}
        naturalSlideWidth={isMobile ? 105 : 200}
        totalSlides={8}
        visibleSlides={isMobile ? 1 : 3}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 1"
              reviewerImageUrl={UserImage1}
            />
          </StyledSlide>

          <StyledSlide index={1}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 2"
              reviewerImageUrl={UserImage2}
            />
          </StyledSlide>

          <StyledSlide index={2}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 3"
              reviewerImageUrl={UserImage3}
            />
          </StyledSlide>

          <StyledSlide index={3}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 4"
              reviewerImageUrl={UserImage4}
            />
          </StyledSlide>

          <StyledSlide index={4}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 5"
              reviewerImageUrl={UserImage1}
            />
          </StyledSlide>

          <StyledSlide index={5}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 6"
              reviewerImageUrl={UserImage2}
            />
          </StyledSlide>

          <StyledSlide index={6}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 7"
              reviewerImageUrl={UserImage3}
            />
          </StyledSlide>

          <StyledSlide index={7}>
            <ReviewCard
              reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reviewerName="Happy User 8"
              reviewerImageUrl={UserImage4}
            />
          </StyledSlide>
        </Slider>

        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
