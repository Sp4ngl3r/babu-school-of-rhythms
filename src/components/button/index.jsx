import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 9px" : "8px 18px")};
  border-radius: 8px;
  background-color: #9e645c;
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "16px" : "18px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 180ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid #9e645c;
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
