import React from "react";
import UploadFileArea from "../UploadFileArea";
import Frame8 from "../Frame8";
import styled from "styled-components";
import { MulishBoldWhite16px, ValignTextMiddle } from "../../styledMixins";


function Container(props) {
  const { uploadFileAreaProps } = props;

  return (
    <Container1>
      <FileUpload>
        <UploadFileArea className={uploadFileAreaProps.className} />
        <Frame8 />
        <CTA>
          <Label>LEER DOCUENTO</Label>
        </CTA>
      </FileUpload>
    </Container1>
  );
}

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

const CTA = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 9px 14px;
  position: relative;
  align-self: stretch;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgba(240.00000089406967, 0, 183.00000429153442, 0.5) 0%,
    rgba(2.000000118277967, 141.0000067949295, 249.00000035762787, 0.5) 100%
  );
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWhite16px}
            position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Container2 = styled.div`
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

const CTA1 = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 9px 14px;
  position: relative;
  align-self: stretch;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgba(240.00000089406967, 0, 183.00000429153442, 0.5) 0%,
    rgba(2.000000118277967, 141.0000067949295, 249.00000035762787, 0.5) 100%
  );
`;

const Label1 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWhite16px}
            position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default Container;
