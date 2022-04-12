import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../../components/marginer";
import { theme } from "../../theme";

const NavigationBarContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CompanyBrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: ${theme.primary};
  }
`;

export function NavigationBar(props) {
  return (
    <NavigationBarContainer>
      <CompanyBrandContainer>
        <Logo inline />
      </CompanyBrandContainer>
      <AccessibilityContainer>
        <Button small>Get Started</Button>
        <Marginer direction="horizontal" margin="9px" />
        <LoginButton small>Login</LoginButton>
      </AccessibilityContainer>
    </NavigationBarContainer>
  );
}
