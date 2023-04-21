import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuOption from "../MenuOption";
import CTA from "../CTA";
import Footer from "../Footer";
import styled from "styled-components";
import {
  MulishBoldHollywoodCerise16px,
  MulishBoldWhite16px2,
  MulishBoldHollywoodCerise24px,
  MulishNormalGraniteGray12px,
  ValignTextMiddle,
  MulishNormalBlueWhale24px,
} from "../../styledMixins";
import "./LeerDocumento.css";

function LeerDocumento(props) {
  const {
    salir,
    cargaMasiva,
    consultarDocumentos,
    uploadIcon,
    spanText1,
    spanText2,
    spanText3,
    formatosSoportadosDocTxtPdf,
    logoProps,
  } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.file.files[0]);
    console.log(formData);
    fetch("http://localhost:5001/upload", {
      method: "POST",
      body: formData,
    })
      //.then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

  }
  return (
    <div className="leer-documento screen">
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
      <form onSubmit={onSubmit}  enctype="multipart/form-data">
        <FileUpload>
          {/*<Link to="/leer-documento-2">*/}
            <UploadFileArea>
              <OverlapGroup>
                <UploadIcon src={uploadIcon} alt="Upload icon" />
                <ArrastrarSoltarA>
                  <span>
                    <span className="mulish-bold-woodsmoke-16px">{spanText1}</span>
                    <span className="mulish-bold-mine-shaft-16px">{spanText2}</span>
                    <Span24>{spanText3}</Span24>
                  </span>
                </ArrastrarSoltarA>
                <FormatosSoportadosDocTxtPdf>{formatosSoportadosDocTxtPdf}</FormatosSoportadosDocTxtPdf>
              </OverlapGroup>
            </UploadFileArea>
        {/*  </Link> */}
          <CTA />
          <input type="file" id="file" name="file" />
          <input type="submit" value="Upload" />
        </FileUpload>
        </form>
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
  height: 427px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 633px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 144px 130px;
  align-items: center;
  min-height: 427px;
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

const Span24 = styled.span`
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

export default LeerDocumento;
