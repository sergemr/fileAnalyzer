import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuOption from "../MenuOption";
import UploadFileArea from "../UploadFileArea";
import UploadingFile1 from "../UploadingFile1";
import Footer from "../Footer";
import styled from "styled-components";
import {
  MulishBoldHollywoodCerise24px,
  MulishNormalBlueWhale24px,
  MulishBoldWhite16px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./LeerDocumento5.css";

function LeerDocumento5(props) {
  const {
    salir,
    cargaMasiva,
    consultarDocumentos,
    label,
    logoProps,
    uploadingFile11Props,
    uploadingFile12Props,
  } = props;

  return (
    <form className="leer-documento-5 screen" name="form1" action="form1" method="post">
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
        <MenuOption />
        <Link to="/carga-masiva-1">
          <MenuOption1>
            <CargaMasiva>{cargaMasiva}</CargaMasiva>
            <Line1 src="/img/line-1.svg" alt="Line 1" />
          </MenuOption1>
        </Link>
        <Link to="/consultar-documentos-1">
          <MenuOption2>
            <ConsultarDocumentos>{consultarDocumentos}</ConsultarDocumentos>
          </MenuOption2>
        </Link>
      </Menu>
      <Container>
        <FileUpload>
          <UploadFileArea />
          <FileList>
            <UploadingFile1 documento1Pdf={uploadingFile11Props.documento1Pdf} />
            <UploadingFile1
              documento1Pdf={uploadingFile12Props.documento1Pdf}
              className={uploadingFile12Props.className}
            />
          </FileList>
          <a href="javascript:SubmitForm('form1')">
            <CTA>
              <Label>{label}</Label>
            </CTA>
          </a>
        </FileUpload>
      </Container>
      <Footer />
    </form>
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

const MenuOption1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0px 0px 0px 16px;
  position: relative;
  cursor: pointer;
`;

const CargaMasiva = styled.div`
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

const MenuOption2 = styled.div`
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

const FileList = styled.div`
  position: relative;
  min-width: 632px;
  height: 102px;
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
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
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

export default LeerDocumento5;
