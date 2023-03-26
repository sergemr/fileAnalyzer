import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuOption2 from "../MenuOption2";
import UploadFileArea2 from "../UploadFileArea2";
import DocumentName from "../DocumentName";
import CTA3 from "../CTA3";
import Footer from "../Footer";
import styled from "styled-components";
import { MulishBoldHollywoodCerise24px, MulishNormalBlueWhale24px, ValignTextMiddle } from "../../styledMixins";
import "./CargaMasiva5.css";

function CargaMasiva5(props) {
  const {
    salir,
    leerDocumento,
    consultarDocumentos,
    logoProps,
    uploadFileArea2Props,
    documentName1Props,
    documentName2Props,
  } = props;

  return (
    <div className="carga-masiva screen">
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
          <Link to="/carga-masiva-2">
            <UploadingFile1>
              <DocumentName>{documentName1Props.children}</DocumentName>
            </UploadingFile1>
          </Link>
          <Link to="/carga-masiva-2">
            <UploadingFile1>
              <DocumentName>{documentName2Props.children}</DocumentName>
            </UploadingFile1>
          </Link>
          <CTA3 />
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
  border-color: var(--quill-gray);
  cursor: pointer;
`;

export default CargaMasiva5;
