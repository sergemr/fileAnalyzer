import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Container3 from "../Container3";
import Footer from "../Footer";
import styled from "styled-components";
import { MulishBoldHollywoodCerise24px, ValignTextMiddle } from "../../styledMixins";
import "./ConsultarDocumentos2.css";

function ConsultarDocumentos2(props) {
  const { salir, regresar, logoProps, container3Props } = props;

  return (
    <div className="consultar-documentos-2 screen">
      <Header>
        <Logo logo_Vector={logoProps.logo_Vector} />
        <Link to="/login">
          <BtnSalir>
            <Salir>{salir}</Salir>
            <LogOut src="/img/log-out.svg" alt="log-out" />
          </BtnSalir>
        </Link>
      </Header>
      <a href="javascript:history.back()">
        <BtnRegresar>
          <ArrowLeft src="/img/arrow-left-1.svg" alt="arrow-left" />
          <Salir>{regresar}</Salir>
        </BtnRegresar>
      </a>
      <Container3 {...container3Props} />
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

const BtnRegresar = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 8px;
  position: relative;
  cursor: pointer;
`;

const ArrowLeft = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default ConsultarDocumentos2;
