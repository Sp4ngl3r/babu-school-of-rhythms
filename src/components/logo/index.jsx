import React from "react";
import styled, { css } from "styled-components";

// import BeemaLogo from "../../assets/logo/logo_cropped.png";
import BabuSirImage from "../../assets/logo/babu_sir.jpg";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImage = styled.img`
  width: 8em;
  height: 8em;

  ${({ inline }) =>
    inline &&
    css`
      width: 50px;
      height: 50px;
      margin-right: 7px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 6em;
      height: 6em;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "22px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "38px" : "55px"};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 800;
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
