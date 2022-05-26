import React from "react";
import styled from "styled-components";
import { CaptionedImages } from "../../components/captionedImage";
import { Marginer } from "../../components/marginer";
import { NavigationBar } from "../../components/navigationBar";
import { UploadForm } from "../../components/uploadForm";

const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-attachment: fixed; */
  /* background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%); */

  background-color: #3eecac;
  background-image: linear-gradient(19deg, #3eecac 0%, #ee74e1 100%);
`;

const GalleryTitle = styled.h1`
  margin-top: 22px;
  font-size: 55px;
  color: #2e294e;
  font-weight: 800;
  text-align: center;
`;

export function Gallery(props) {
  return (
    <GalleryContainer>
      <NavigationBar isGalleryPage={true} />
      <Marginer direction="vertical" margin="2em" />
      <GalleryTitle>Gallery</GalleryTitle>
      {/* <UploadForm /> */}
      <Marginer direction="vertical" margin="4em" />
      <CaptionedImages />
    </GalleryContainer>
  );
}
