import React from "react";
import UploadFileArea from "../UploadFileArea";
import Frame8 from "../Frame8";
import UploadingFile14 from "../UploadingFile14";
import CTA from "../CTA";
import styled from "styled-components";


function Container2() {
  return (
    <Container>
      <FileUpload>
        <UploadFileArea />
        <HeadingUploaded>
          <Frame8 />
        </HeadingUploaded>
        <UploadingFile14 />
        <CTA />
      </FileUpload>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 718px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 0px;
  position: relative;
  align-self: stretch;
`;

const FileUpload = styled.div`
  display: flex;
  flex-direction: column;
  width: 726px;
  align-items: center;
  gap: 30px;
  padding: 30px 47px;
  position: relative;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 6px 8px #0000000d;
`;

const HeadingUploaded = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const Container1 = styled.div`
  display: flex;
  height: 718px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 0px;
  position: relative;
  align-self: stretch;
`;

const FileUpload1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 726px;
  align-items: center;
  gap: 30px;
  padding: 30px 47px;
  position: relative;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 6px 8px #0000000d;
`;

const HeadingUploaded1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

export default Container2;
