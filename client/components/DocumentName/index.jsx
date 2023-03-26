import React from "react";
import styled from "styled-components";
import { MulishNormalWoodsmoke12px, ValignTextMiddle } from "../../styledMixins";


function DocumentName(props) {
  const { children, className } = props;

  return (
    <DocumentName1 className={`document-name ${className || ""}`}>
      <SeleccioneCarpetaDeOrigen className="seleccione-carpeta-de-origen">{children}</SeleccioneCarpetaDeOrigen>
    </DocumentName1>
  );
}

const DocumentName1 = styled.div`
  display: flex;
  width: fit-content;
  height: 20px;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  top: 7px;
  left: 15px;

  &.document-name.document-name-2 {
    position: absolute;
  }

  &.document-name.document-name-3 {
    position: absolute;
  }

  &.document-name.document-name-4 {
    position: absolute;
  }

  &.document-name.document-name-5 {
    position: absolute;
  }

  &.document-name.document-name-6 {
    position: absolute;
  }

  &.document-name.document-name-7 {
    position: absolute;
  }

  &.document-name.document-name-8 {
    position: absolute;
  }

  &.document-name.document-name-9 {
    position: absolute;
  }
`;

const SeleccioneCarpetaDeOrigen = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalWoodsmoke12px}
            position: relative;
  width: 570px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default DocumentName;
