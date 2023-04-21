import React from "react";
import styled from "styled-components";
import { MulishNormalWoodsmoke12px, ValignTextMiddle } from "../../styledMixins";


function UploadingFile1(props) {
  const { documento1Pdf, className } = props;

  return (
    <UploadingFile11 className={`uploading-file-1 ${className || ""}`}>
      <Documento1pdf className="documento-1pdf">{documento1Pdf}</Documento1pdf>
      <Vector className="vector" src="/img/vector.svg" alt="Vector" />
    </UploadingFile11>
  );
}

const UploadingFile11 = styled.div`
  position: absolute;
  height: 36px;
  top: 0;
  left: 0;
  display: flex;
  padding: 7px 16px;
  align-items: flex-start;
  min-width: 632px;
  gap: 448px;
  background-color: var(--white);
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--azure-radiance);

  &.uploading-file-1.uploading-file-2 {
    top: 52px;
  }
`;

const Documento1pdf = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalWoodsmoke12px}
            width: 135px;
  height: 18px;
  position: relative;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Vector = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  margin-bottom: 2px;
`;

export default UploadingFile1;
