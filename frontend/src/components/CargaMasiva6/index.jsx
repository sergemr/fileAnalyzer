import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuOption2 from "../MenuOption2";
import UploadFileArea2 from "../UploadFileArea2";
import DocumentName from "../DocumentName";
import Footer from "../Footer";
import styled from "styled-components";
import {
  MulishBoldHollywoodCerise24px,
  MulishNormalBlueWhale24px,
  MulishBoldWhite16px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./CargaMasiva6.css";

function CargaMasiva6(props) {
  const {
    salir,
    leerDocumento,
    consultarDocumentos,
    label,
    logoProps,
    uploadFileArea2Props,
    documentName1Props,
    documentName2Props,
  } = props;

  return (
    <div className="carga-masiva2 screen">
      <Header>
        <Logo logo_Vector={logoProps.logo_Vector} />
        <Link to="/login">
          <BtnSalir>
            <Salir>{salir}</Salir>
            <LogOut src="/img/log-out.svg" alt="log-out" />
          </BtnSalir>
        </Link>
      </Header>
      <Menu>
        <Link to="/leer-documento-1">
          <MenuOption>
            <LeerDocumento>{leerDocumento}</LeerDocumento>
            <Line1 src="/img/line-1-4.svg" alt="Line 1" />
          </MenuOption>
        </Link>
        <MenuOption2 />
        <Link to="/consultar-documentos-1">
          <MenuOption1>
            <ConsultarDocumentos>{consultarDocumentos}</ConsultarDocumentos>
          </MenuOption1>
        </Link>
      </Menu>
      <Container>
        <FileUpload>
          <UploadFileArea2 uploadIcon={uploadFileArea2Props.uploadIcon} />
          <UploadingFile1>
            <DocumentName className={documentName1Props.className}>{documentName1Props.children}</DocumentName>
            <Link to="/carga-masiva-3">
              <Vector src="/img/vector.svg" alt="Vector" />
            </Link>
          </UploadingFile1>
          <UploadingFile1>
            <DocumentName className={documentName2Props.className}>{documentName2Props.children}</DocumentName>
            <Link to="/carga-masiva-3">
              <Vector src="/img/vector.svg" alt="Vector" />
            </Link>
          </UploadingFile1>
          <Link to="/carga-masiva-4">
            <CTA>
              <Label>{label}</Label>
            </CTA>
          </Link>
        </FileUpload>
      </Container>
      <Footer />
    </div>
  );
}

const Header = styled.header`
  display: flex;
  height: auto;
  align-items: center;
  gap: 16px;
  padding: 0px 0px 48px;
  position: relative;
  align-self: stretch;
  background-color: transparent;
`;

const BtnSalir = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  position: relative;
  cursor: pointer;
`;

const Salir = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldHollywoodCerise24px}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const LogOut = styled.img`
  position: relative;
  min-width: 29px;
  height: 24px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const MenuOption = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0px 0px 0px 16px;
  position: relative;
  cursor: pointer;
`;

const LeerDocumento = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale24px}
            position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Line1 = styled.img`
  position: relative;
  min-width: 1px;
  height: 52px;
  margin-right: -1px;
  object-fit: cover;
`;

const MenuOption1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  cursor: pointer;
`;

const ConsultarDocumentos = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale24px}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

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

const UploadingFile1 = styled.div`
  position: relative;
  min-width: 632px;
  height: 36px;
  background-color: var(--white);
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--azure-radiance);
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 9px;
  left: 599px;
  cursor: pointer;
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
    rgb(240.00000089406967, 0, 183.00000429153442) 0%,
    rgb(2.000000118277967, 141.0000067949295, 249.00000035762787) 100%
  );
  cursor: pointer;
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

export default CargaMasiva6;
