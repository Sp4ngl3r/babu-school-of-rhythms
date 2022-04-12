import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../../components/marginer";

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 380px;
  height: 560px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  padding: 15px 1.6em;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 18px;
  color: #d1d1d1;
  font-size: 42px;
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

const CardLine = styled.span`
  min-width: 100%;
  min-height: 2px;
  margin-bottom: 1.5em;
  background-color: #cdcdcd;
  display: flex;
`;

const ReviewerDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0px 15px;
`;

const ReviewerName = styled.span`
  font-size: 15px;
  color: #000;
`;

export function ReviewCard(props) {
  const { reviewText, reviewerName, reviewerImageUrl } = props;

  return (
    <CardContainer>
      <QuoteIcon>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </QuoteIcon>
      <Marginer direction="vertical" margin="7em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="8em" />
      <CardLine />
      <ReviewerDetailsContainer>
        <ReviewerImage src={reviewerImageUrl} />
        <ReviewerName>{reviewerName}</ReviewerName>
      </ReviewerDetailsContainer>
    </CardContainer>
  );
}
