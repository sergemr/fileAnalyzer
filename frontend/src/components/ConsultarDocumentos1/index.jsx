import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuOption3 from "../MenuOption3";
import Browser from "../Browser";
import Navbar from "../Navbar";
import BtnDetalle from "../BtnDetalle";
import Navbar2 from "../Navbar2";
import Footer from "../Footer";
import styled from "styled-components";
import {
  MulishNormalBlueWhale20px2,
  MulishBoldHollywoodCerise24px,
  MulishNormalBlueWhale18px,
  ValignTextMiddle,
  MulishNormalBlueWhale24px,
} from "../../styledMixins";
import "./ConsultarDocumentos1.css";

function ConsultarDocumentos1(props) {
  const {
    salir,
    leerDocumento,
    cargaMasiva,
    fechaInicio,
    fechaFin,
    navbarLinkNumber,
    navbarLinkF56382,
    navbarLinkEmpresaX,
    navbarLinkDate1,
    navbarLinkDate2,
    navbarLinkPrice1,
    navbarLinkPrice2,
    logoProps,
  } = props;

  return (
    <div className="consultar-documentos-1 screen">
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
        <Link to="/carga-masiva-1">
          <MenuOption>
            <LeerDocumento>{cargaMasiva}</LeerDocumento>
            <Line1 src="/img/line-1-4.svg" alt="Line 1" />
          </MenuOption>
        </Link>
        <MenuOption3 />
      </Menu>
      <Container>
        <FileUpload>
          <Frame11>
            <Browser />
            <Link to="/carga-masiva-3-2">
              <Browser1>
                <FechaInicio>{fechaInicio}</FechaInicio>
                <Frame4 src="/img/frame-4.svg" alt="Frame 4" />
              </Browser1>
            </Link>
            <Link to="/carga-masiva-3-2">
              <Browser1>
                <FechaInicio>{fechaFin}</FechaInicio>
                <Frame4 src="/img/frame-4.svg" alt="Frame 4" />
              </Browser1>
            </Link>
          </Frame11>
          <Navbar />
          <Line3 src="/img/line-3.svg" alt="Line 3" />
          <Navbar1>
            <NavbarLinkNumber>{navbarLinkNumber}</NavbarLinkNumber>
            <NavbarLinkF56382>{navbarLinkF56382}</NavbarLinkF56382>
            <NavbarLinkEmpresaX>{navbarLinkEmpresaX}</NavbarLinkEmpresaX>
            <NavbarLinkDate>{navbarLinkDate1}</NavbarLinkDate>
            <NavbarLinkDate1>{navbarLinkDate2}</NavbarLinkDate1>
            <NavbarLinkPrice>{navbarLinkPrice1}</NavbarLinkPrice>
            <NavbarLinkPrice>{navbarLinkPrice2}</NavbarLinkPrice>
            <Link to="/consultar-documentos-2">
              <Actions>
                <BtnDetalle />
              </Actions>
            </Link>
          </Navbar1>
          <Navbar2 />
          <Navbar2 />
          <Navbar2 />
          <Navbar2 />
          <Navbar2 />
          <Navbar2 />
          <Navbar2 />
          <Navbar2 />
          <Navbar2 />
          <Line3 src="/img/line-3.svg" alt="Line 2" />
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

const Container = styled.div`
  display: flex;
  width: 1272px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 0px;
  position: relative;
`;

const FileUpload = styled.div`
  display: flex;
  flex-direction: column;
  width: 1268px;
  align-items: center;
  gap: 24px;
  padding: 30px 24px;
  position: relative;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 6px 8px #0000000d;
`;

const Frame11 = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const Browser1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 16px;
  position: relative;
  cursor: pointer;
`;

const FechaInicio = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px2}
            position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame4 = styled.img`
  position: relative;
  min-width: 180px;
  height: 48px;
`;

const Line3 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1220px;
  height: 1px;
  object-fit: cover;
`;

const Navbar1 = styled.div`
  ${MulishNormalBlueWhale18px}
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  margin-left: -2px;
  margin-right: -2px;
`;

const NavbarLinkNumber = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 80px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const NavbarLinkF56382 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 111px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const NavbarLinkEmpresaX = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 173px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const NavbarLinkDate = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 140px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const NavbarLinkDate1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 188px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const NavbarLinkPrice = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 24px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
`;

export default ConsultarDocumentos1;
