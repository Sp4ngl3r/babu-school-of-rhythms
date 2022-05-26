import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import ProgressBar from "../progressBar";

const FormContainer = styled.form`
  margin: 30px auto 10px;
  text-align: center;
`;

const UploadSection = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.secondary};
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: ${theme.secondary};
  font-weight: bold;
  font-size: 24px;

  &:hover {
    background: ${theme.secondary};
    cursor: pointer;
    color: #fff;
  }
`;

const FileInput = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;

//TODO: Add ability to add Captions while uploading images
const CaptionInput = styled.input``;

const AddFileButton = styled.span``;

const OutputMessage = styled.div`
  height: 60px;
  width: 400px;
  font-size: 0.8rem;
`;

const ErrorMessage = styled.div`
  color: ${theme.error};
`;

export function UploadForm(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile("");
      setError(
        "Select the image with any of the specified type - png / jpeg / jpg"
      );
    }
  };

  return (
    <FormContainer>
      <UploadSection>
        <FileInput type="file" onChange={changeHandler} />
        <AddFileButton>+</AddFileButton>
      </UploadSection>
      <OutputMessage>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </OutputMessage>
    </FormContainer>
  );
}
