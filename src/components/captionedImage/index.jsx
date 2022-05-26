import React from "react";
import Gallery from "react-grid-gallery";
import styled from "styled-components";
import useFirestore from "../../hooks/useFirestore";

const CaptionedImagesContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
  display: grid;
  min-height: 1px;
  max-width: 70%;
  overflow: auto;
  transition: all 200ms ease-in-out;
`;

const galleryImages = [
  {
    // 1
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2Fscan0026.jpg?alt=media&token=9173d4e6-c00b-45ab-87b0-13a98a527180",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2Fscan0026.jpg?alt=media&token=9173d4e6-c00b-45ab-87b0-13a98a527180",
    thumbnailWidth: 230,
    thumbnailHeight: 300,
    caption: "Babu Sukumar",
  },
  {
    // 2
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FIMG_3128.JPG?alt=media&token=fbade346-59d5-4666-ae88-80b0048acde5",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FIMG_3128.JPG?alt=media&token=fbade346-59d5-4666-ae88-80b0048acde5",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 3
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FIMG_0566.JPG?alt=media&token=b79bd316-f516-49a2-9c9f-32889c6631b4",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FIMG_0566.JPG?alt=media&token=b79bd316-f516-49a2-9c9f-32889c6631b4",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 4
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC_0176.jpg?alt=media&token=13da28e5-c4f5-4596-b2ce-853cd3b9b5b8",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC_0176.jpg?alt=media&token=13da28e5-c4f5-4596-b2ce-853cd3b9b5b8",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 5
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC_0124.jpg?alt=media&token=475f91b5-5c4e-43e0-b87a-718e15b251c1",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC_0124.jpg?alt=media&token=475f91b5-5c4e-43e0-b87a-718e15b251c1",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 6
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC_0032.jpg?alt=media&token=81f7619c-fc81-4dcc-b858-e630a063f297",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC_0032.jpg?alt=media&token=81f7619c-fc81-4dcc-b858-e630a063f297",
    thumbnailWidth: 390,
    thumbnailHeight: 300,
    caption: "",
  },
  {
    // 7
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC03083.JPG?alt=media&token=f4c19fbc-19bc-46ec-9caf-913c9b4bee91",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC03083.JPG?alt=media&token=f4c19fbc-19bc-46ec-9caf-913c9b4bee91",
    thumbnailWidth: 350,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 8
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC03024.JPG?alt=media&token=e5d992ea-5796-4cc0-b5b8-0d611f04fe34",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC03024.JPG?alt=media&token=e5d992ea-5796-4cc0-b5b8-0d611f04fe34",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 9
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC03020.JPG?alt=media&token=1ed2d63c-4a46-4216-b3e7-5b1b3fc70421",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2FDSC03020.JPG?alt=media&token=1ed2d63c-4a46-4216-b3e7-5b1b3fc70421",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 10
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839626.jpg?alt=media&token=f796c40b-fbf4-4965-8517-de338af1bfe4",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839626.jpg?alt=media&token=f796c40b-fbf4-4965-8517-de338af1bfe4",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 11
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839613.jpg?alt=media&token=adc471f7-b384-400f-8ed5-4787fd6f0450",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839613.jpg?alt=media&token=adc471f7-b384-400f-8ed5-4787fd6f0450",
    thumbnailWidth: 350,
    thumbnailHeight: 350,
    caption: "",
  },
  {
    // 12
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839551.jpg?alt=media&token=0fc2e160-4ca3-4e38-bb21-6c41c0731c0b",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839551.jpg?alt=media&token=0fc2e160-4ca3-4e38-bb21-6c41c0731c0b",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 13
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839531.jpg?alt=media&token=f7e0970a-c90d-49c9-a2b3-9b355bf9607e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839531.jpg?alt=media&token=f7e0970a-c90d-49c9-a2b3-9b355bf9607e",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 14 
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839515.jpg?alt=media&token=567343ca-dbe0-4b51-8601-d599828bbcf8",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839515.jpg?alt=media&token=567343ca-dbe0-4b51-8601-d599828bbcf8",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 15
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839502.jpg?alt=media&token=08797659-eda2-419d-a40a-277a7d06f9dd",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839502.jpg?alt=media&token=08797659-eda2-419d-a40a-277a7d06f9dd",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 16
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839486.jpg?alt=media&token=bb374966-b3ef-4019-ab6e-e1aa0d8db7cd",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839486.jpg?alt=media&token=bb374966-b3ef-4019-ab6e-e1aa0d8db7cd",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 17
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839469.jpg?alt=media&token=3498e2a2-377d-4551-bc7f-bfaff8b4d8a4",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839469.jpg?alt=media&token=3498e2a2-377d-4551-bc7f-bfaff8b4d8a4",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 18
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839452.jpg?alt=media&token=08e59bcb-fe22-4130-9946-ece0f229ca0c",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839452.jpg?alt=media&token=08e59bcb-fe22-4130-9946-ece0f229ca0c",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 19
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839434.jpg?alt=media&token=049c8920-5c15-4cbf-8b06-5f01cb90a992",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839434.jpg?alt=media&token=049c8920-5c15-4cbf-8b06-5f01cb90a992",
    thumbnailWidth: 350,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 20
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839418.jpg?alt=media&token=60089a53-021a-46fe-a2fd-ff9ff0aae9e8",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839418.jpg?alt=media&token=60089a53-021a-46fe-a2fd-ff9ff0aae9e8",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 21
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839401.jpg?alt=media&token=e0f7e928-16b5-48c6-8b31-1f58e773ddc2",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839401.jpg?alt=media&token=e0f7e928-16b5-48c6-8b31-1f58e773ddc2",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 22
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839385.jpg?alt=media&token=5260707c-800b-43bf-8f84-0dba0b9e97f6",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839385.jpg?alt=media&token=5260707c-800b-43bf-8f84-0dba0b9e97f6",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 23
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839369.jpg?alt=media&token=485aa7d7-0173-4957-bf7a-6d25d7ebc487",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839369.jpg?alt=media&token=485aa7d7-0173-4957-bf7a-6d25d7ebc487",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 24
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839353.jpg?alt=media&token=a953d723-9af8-4baa-a46d-8f3c5823802d",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839353.jpg?alt=media&token=a953d723-9af8-4baa-a46d-8f3c5823802d",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 25
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839342.jpg?alt=media&token=1b2acbd3-b6ba-4172-8dc5-af168d98cefd",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839342.jpg?alt=media&token=1b2acbd3-b6ba-4172-8dc5-af168d98cefd",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 26
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839331.jpg?alt=media&token=180152a9-24ed-4a20-9ee1-89188f88ae3b",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839331.jpg?alt=media&token=180152a9-24ed-4a20-9ee1-89188f88ae3b",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 27
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839320.jpg?alt=media&token=adf00aa5-c8ae-46e2-8079-acaca6c3d762",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839320.jpg?alt=media&token=adf00aa5-c8ae-46e2-8079-acaca6c3d762",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 28
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839308.jpg?alt=media&token=f8b07fac-0e09-402e-b9e8-e0709d5b30a5",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839308.jpg?alt=media&token=f8b07fac-0e09-402e-b9e8-e0709d5b30a5",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 29
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839292.jpg?alt=media&token=757b3c37-486d-4340-ad87-88c45cfac745",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839292.jpg?alt=media&token=757b3c37-486d-4340-ad87-88c45cfac745",
    thumbnailWidth: 350,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 30
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839275.jpg?alt=media&token=90ec624d-0f5c-4324-9614-3ef88694c1b9",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839275.jpg?alt=media&token=90ec624d-0f5c-4324-9614-3ef88694c1b9",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 31
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839262.jpg?alt=media&token=6d08e857-62c2-48eb-86a3-8b30f8eeea43",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839262.jpg?alt=media&token=6d08e857-62c2-48eb-86a3-8b30f8eeea43",
    thumbnailWidth: 450,
    thumbnailHeight: 250,
    caption: "",
  },
  {
    // 32
    src: "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839246.jpg?alt=media&token=f84eac1b-cbc1-4680-a54f-9e28eb1d89a5",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/babu-school-of-rhythms-82ac3.appspot.com/o/gallery-images%2F1651844839246.jpg?alt=media&token=f84eac1b-cbc1-4680-a54f-9e28eb1d89a5",
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    caption: "",
  },
];

export function CaptionedImages(props) {
  // const { docs } = useFirestore("gallery-images");
  // const galleryImages = [];
  // Object.keys(docs).forEach((doc) =>
  //   galleryImages.push({
  //     src: docs[doc].downloadURL,
  //     thumbnail: docs[doc].downloadURL,
  //     caption: docs[doc].caption,
  //   })
  // );

  return (
    <CaptionedImagesContainer>
      <Gallery
        images={galleryImages}
        enableImageSelection={false}
        margin={8}
        rowHeight={300}
        backdropClosesModal={true}
      />
    </CaptionedImagesContainer>
  );
}
