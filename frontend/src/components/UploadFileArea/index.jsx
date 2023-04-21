import React from "react";
import styled from "styled-components";
import {
  MulishNormalGraniteGray12px,
  MulishBoldHollywoodCerise16px,
  MulishBoldWhite16px2,
  ValignTextMiddle,
} from "../../styledMixins";


function UploadFileArea(props) {
  const { className } = props;

  return (
    <UploadFileArea1 className={`upload-file-area ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <UploadIcon className="upload-icon" src="/img/upload-icon@2x.png" alt="Upload icon" />
        <ArrastrarSoltarA className="arrastrar-soltar-a">
          <span>
            <span className="span0 mulish-bold-blue-whale-16px">Arrastrar &amp; soltar archivos o</span>
            <span className="span1 mulish-bold-mine-shaft-16px">&nbsp;</span>
            <Span2 className="span2">Buscar en el equipo</Span2>
          </span>
        </ArrastrarSoltarA>
        <FormatosSoportadosDocTxtPdf className="formatos-soportados-doc-txt-pdf">
          Formatos soportados: doc, txt, pdf
        </FormatosSoportadosDocTxtPdf>
      </OverlapGroup>
    </UploadFileArea1>
  );
}

const UploadFileArea1 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;

  &.upload-file-area.upload-file-area-1 {
    opacity: 0;
  }
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 633px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 57px 130px;
  align-items: center;
  min-height: 258px;
  background-color: var(--zircon);
  border-radius: 20px;
  border: 1px dashed;
  border-color: var(--violet-blue);
`;

const UploadIcon = styled.img`
  width: 67px;
  height: 60px;
  margin-right: 0.22px;
`;

const ArrastrarSoltarA = styled.p`
  ${ValignTextMiddle}
  ${MulishBoldWhite16px2}
            height: 24px;
  position: relative;
  align-self: flex-end;
  margin-top: 25px;
  min-width: 371px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Span2 = styled.span`
  ${MulishBoldHollywoodCerise16px}
  text-decoration: underline;
`;

const FormatosSoportadosDocTxtPdf = styled.p`
  ${ValignTextMiddle}
  ${MulishNormalGraniteGray12px}
            height: 18px;
  position: relative;
  margin-top: 10px;
  margin-left: 2px;
  min-width: 190px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default UploadFileArea;
