import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useStorage from "../../hooks/useStorage";
import styled from "styled-components";
import { theme } from "../../theme";

const MotionContainer = styled(motion.div)`
  height: 6px;
  background: ${theme.secondary};
  margin-top: 20px;
  display: flex;
`;

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <MotionContainer
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></MotionContainer>
  );
};

export default ProgressBar;
