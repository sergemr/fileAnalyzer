import React from "react";
import styled from "styled-components";
import { MulishNormalGraniteGray12px, MulishBoldWoodsmoke16px, ValignTextMiddle } from "../../styledMixins";


function UploadFileArea2(props) {
  const { uploadIcon } = props;

  return (
    <UploadFileArea>
      <OverlapGroup>
        <UploadIcon src={uploadIcon} alt="Upload icon" />
        <CargaMasivaDeArchivos>Carga masiva de archivos</CargaMasivaDeArchivos>
        <FormatosSoportadosDocTxtPdf>Formatos soportados: doc, txt, pdf</FormatosSoportadosDocTxtPdf>
      </OverlapGroup>
    </UploadFileArea>
  );
}

const UploadFileArea = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 633px;
  top: -1px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 57.5px 216.5px;
  align-items: center;
  min-height: 259px;
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

const CargaMasivaDeArchivos = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWoodsmoke16px}
            height: 24px;
  position: relative;
  align-self: flex-end;
  margin-top: 25px;
  min-width: 198px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
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

const UploadFileArea1 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  width: 633px;
  top: -1px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 57.5px 216.5px;
  align-items: center;
  min-height: 259px;
  background-color: var(--zircon);
  border-radius: 20px;
  border: 1px dashed;
  border-color: var(--violet-blue);
`;

const UploadIcon1 = styled.img`
  width: 67px;
  height: 60px;
  margin-right: 0.22px;
`;

const CargaMasivaDeArchivos1 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWoodsmoke16px}
            height: 24px;
  position: relative;
  align-self: flex-end;
  margin-top: 25px;
  min-width: 198px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FormatosSoportadosDocTxtPdf1 = styled.p`
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

const UploadFileArea3 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;
`;

const OverlapGroup2 = styled.div`
  position: relative;
  width: 633px;
  top: -1px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 57.5px 216.5px;
  align-items: center;
  min-height: 259px;
  background-color: var(--zircon);
  border-radius: 20px;
  border: 1px dashed;
  border-color: var(--violet-blue);
`;

const UploadIcon2 = styled.img`
  width: 67px;
  height: 60px;
  margin-right: 0.22px;
`;

const CargaMasivaDeArchivos2 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWoodsmoke16px}
            height: 24px;
  position: relative;
  align-self: flex-end;
  margin-top: 25px;
  min-width: 198px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FormatosSoportadosDocTxtPdf2 = styled.p`
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

const UploadFileArea4 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;
`;

const OverlapGroup3 = styled.div`
  position: relative;
  width: 633px;
  top: -1px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 57.5px 216.5px;
  align-items: center;
  min-height: 259px;
  background-color: var(--zircon);
  border-radius: 20px;
  border: 1px dashed;
  border-color: var(--violet-blue);
`;

const UploadIcon3 = styled.img`
  width: 67px;
  height: 60px;
  margin-right: 0.22px;
`;

const CargaMasivaDeArchivos3 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWoodsmoke16px}
            height: 24px;
  position: relative;
  align-self: flex-end;
  margin-top: 25px;
  min-width: 198px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FormatosSoportadosDocTxtPdf3 = styled.p`
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

const UploadFileArea5 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;
`;

const OverlapGroup4 = styled.div`
  position: relative;
  width: 633px;
  top: -1px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 57.5px 216.5px;
  align-items: center;
  min-height: 259px;
  background-color: var(--zircon);
  border-radius: 20px;
  border: 1px dashed;
  border-color: var(--violet-blue);
`;

const UploadIcon4 = styled.img`
  width: 67px;
  height: 60px;
  margin-right: 0.22px;
`;

const CargaMasivaDeArchivos4 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWoodsmoke16px}
            height: 24px;
  position: relative;
  align-self: flex-end;
  margin-top: 25px;
  min-width: 198px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FormatosSoportadosDocTxtPdf4 = styled.p`
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

const UploadFileArea6 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;
`;

const OverlapGroup5 = styled.div`
  position: relative;
  width: 633px;
  top: -1px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 57.5px 216.5px;
  align-items: center;
  min-height: 259px;
  background-color: var(--zircon);
  border-radius: 20px;
  border: 1px dashed;
  border-color: var(--violet-blue);
`;

const UploadIcon5 = styled.img`
  width: 67px;
  height: 60px;
  margin-right: 0.22px;
`;

const CargaMasivaDeArchivos5 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWoodsmoke16px}
            height: 24px;
  position: relative;
  align-self: flex-end;
  margin-top: 25px;
  min-width: 198px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FormatosSoportadosDocTxtPdf5 = styled.p`
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

export default UploadFileArea2;
