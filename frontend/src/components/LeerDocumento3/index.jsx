import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuOption from "../MenuOption";
import UploadingFile14 from "../UploadingFile14";
import Footer from "../Footer";
import styled from "styled-components";
import {
  MulishBoldHollywoodCerise16px,
  MulishBoldWhite16px2,
  MulishBoldWhite16px,
  MulishBoldHollywoodCerise24px,
  MulishNormalGraniteGray12px,
  ValignTextMiddle,
  MulishNormalBlueWhale24px,
} from "../../styledMixins";
import "./LeerDocumento3.css";

function LeerDocumento3(props) {
  const {
    salir,
    cargaMasiva,
    consultarDocumentos,
    uploadIcon,
    spanText1,
    spanText2,
    spanText3,
    formatosSoportadosDocTxtPdf,
    label,
    logoProps,
  } = props;

  return (
    <div className="leer-documento-3 screen">
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
          <Link to="/leer-documento-4">
            <UploadFileArea>
              <OverlapGroup>
                <UploadIcon src={uploadIcon} alt="Upload icon" />
                <ArrastrarSoltarA>
                  <span>
                    <span className="mulish-bold-blue-whale-16px">{spanText1}</span>
                    <span className="mulish-bold-mine-shaft-16px">{spanText2}</span>
                    <Span23>{spanText3}</Span23>
                  </span>
                </ArrastrarSoltarA>
                <FormatosSoportadosDocTxtPdf>{formatosSoportadosDocTxtPdf}</FormatosSoportadosDocTxtPdf>
              </OverlapGroup>
            </UploadFileArea>
          </Link>
          <UploadingFile14 />
          <Link to="/leer-documento-6">
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

const UploadFileArea = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 632px;
  height: 258px;
  cursor: pointer;
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

const Span23 = styled.span`
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

export default LeerDocumento3;
