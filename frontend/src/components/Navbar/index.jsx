import React from "react";
import styled from "styled-components";
import { MulishBoldBlueWhale20px, ValignTextMiddle } from "../../styledMixins";


function Navbar() {
  return (
    <Navbar1>
      <TitleTable>
        <Place>Registro</Place>
      </TitleTable>
      <NavbarLinkNFactura>N° Factura</NavbarLinkNFactura>
      <NavbarLinkEmisor>Emisor</NavbarLinkEmisor>
      <NavbarLinkFechaEmisin>Fecha emisión</NavbarLinkFechaEmisin>
      <NavbarLinkFechaVencimiento>Fecha vencimiento</NavbarLinkFechaVencimiento>
      <NavbarLinkSubtotal>Subtotal</NavbarLinkSubtotal>
      <NavbarLinkSubtotal>Monto total</NavbarLinkSubtotal>
    </Navbar1>
  );
}

const Navbar1 = styled.div`
  ${MulishBoldBlueWhale20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const TitleTable = styled.div`
  display: flex;
  width: 80px;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkNFactura = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 111px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkEmisor = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 173px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaEmisin = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 140px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaVencimiento = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 188px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkSubtotal = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Navbar2 = styled.div`
  ${MulishBoldBlueWhale20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const TitleTable1 = styled.div`
  display: flex;
  width: 80px;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Place1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkNFactura1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 111px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkEmisor1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 173px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaEmisin1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 140px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaVencimiento1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 188px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkSubtotal1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Navbar3 = styled.div`
  ${MulishBoldBlueWhale20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const TitleTable2 = styled.div`
  display: flex;
  width: 80px;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Place2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkNFactura2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 111px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkEmisor2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 173px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaEmisin2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 140px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaVencimiento2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 188px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkSubtotal2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Navbar4 = styled.div`
  ${MulishBoldBlueWhale20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const TitleTable3 = styled.div`
  display: flex;
  width: 80px;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Place3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkNFactura3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 111px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkEmisor3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 173px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaEmisin3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 140px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkFechaVencimiento3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 188px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NavbarLinkSubtotal3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Navbar;
