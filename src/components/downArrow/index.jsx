import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const DownArrowContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.primary};
  }
`;

const DownArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 28px;
`;

export function DownArrow(props) {
  return (
    <DownArrowContainer>
      <DownArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </DownArrowIcon>
    </DownArrowContainer>
  );
}
