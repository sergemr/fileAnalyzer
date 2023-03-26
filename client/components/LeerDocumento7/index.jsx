import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuOption from "../MenuOption";
import Container from "../Container";
import Footer from "../Footer";
import styled from "styled-components";
import { MulishBoldHollywoodCerise24px, MulishNormalBlueWhale24px, ValignTextMiddle } from "../../styledMixins";
import "./LeerDocumento7.css";

function LeerDocumento7(props) {
  const { salir, cargaMasiva, consultarDocumentos, logoProps, containerProps } = props;

  return (
    <div className="leer-documento2 screen" onclick="window.open('leer-documento-3.html', '_self');">
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
      <Container uploadFileAreaProps={containerProps.uploadFileAreaProps} />
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

export default LeerDocumento7;
