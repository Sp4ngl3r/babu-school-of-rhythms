import React from "react";
import styled, { css } from "styled-components";

import BabuSirImage from "../../assets/logo/BsorLogo.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImage = styled.img`
  width: 450px;
  height: 150px;

  ${({ inline }) =>
    inline &&
    css`
      width: 150px;
      height: 50px;
      margin-right: 7px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 15em;
      height: 5em;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "22px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "38px" : "55px"};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 700;
  text-align: center;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImage src={BabuSirImage} inline={inline} small={small} />
      <LogoText inline={inline} small={small}>
        Babu School of Rhythms
      </LogoText>
    </LogoContainer>
  );
}
