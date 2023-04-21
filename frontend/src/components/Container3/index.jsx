import React from "react";
import GroupEmisor from "../GroupEmisor";
import ContentTable from "../ContentTable";
import TotalTable from "../TotalTable";
import styled from "styled-components";
import {
  MulishBoldHollywoodCerise24px,
  MulishNormalBlueWhale18px,
  MulishBoldBlueWhale20px,
  MulishBoldWhite20px,
  MulishBoldBlueWhale18px,
  MulishBoldWhite32px,
  MulishBoldAzureRadiance24px,
  MulishBoldBlueWhale24px,
  ValignTextMiddle,
} from "../../styledMixins";


function Container3(props) {
  const {
    groupEmisor1Props,
    groupEmisor2Props,
    groupEmisor3Props,
    groupEmisor4Props,
    groupEmisor5Props,
    groupEmisor6Props,
    totalTable1Props,
    totalTable2Props,
    totalTable3Props,
    totalTable4Props,
    totalTable5Props,
    totalTable6Props,
    totalTable7Props,
  } = props;

  return (
    <Container>
      <Detail>
        <FacturaNF56382>
          <span>
            <span className="mulish-bold-azure-radiance-32px">Factura N°:</span>
            <Span13>&nbsp;</Span13>
            <span className="mulish-normal-blue-whale-32px">F-56382</span>
            <span className="mulish-bold-blue-whale-32px"></span>
          </span>
        </FacturaNF56382>
        <GroupEmisor
          spanText1={groupEmisor1Props.spanText1}
          spanText2={groupEmisor1Props.spanText2}
          spanText3={groupEmisor1Props.spanText3}
          spanText4={groupEmisor1Props.spanText4}
        />
        <GroupEmisor
          spanText1={groupEmisor2Props.spanText1}
          spanText2={groupEmisor2Props.spanText2}
          spanText3={groupEmisor2Props.spanText3}
          spanText4={groupEmisor2Props.spanText4}
        />
        <GroupEmisor
          spanText1={groupEmisor3Props.spanText1}
          spanText2={groupEmisor3Props.spanText2}
          spanText3={groupEmisor3Props.spanText3}
          spanText4={groupEmisor3Props.spanText4}
        />
        <GroupEmisor
          spanText1={groupEmisor4Props.spanText1}
          spanText2={groupEmisor4Props.spanText2}
          spanText3={groupEmisor4Props.spanText3}
          spanText4={groupEmisor4Props.spanText4}
        />
        <Line3 src="/img/line-3-1.svg" alt="Line 3" />
        <InformacinDelCliente>Información del cliente</InformacinDelCliente>
        <GroupEmisor1>
          <NombreDelCliente>
            <span>
              <span className="mulish-bold-blue-whale-20px">Nombre del cliente: </span>
              <span className="mulish-bold-blue-whale-20px-2">Hernesto Acosta Madríz</span>
            </span>
          </NombreDelCliente>
          <NombreDelCliente>
            <span>
              <span className="mulish-bold-blue-whale-20px">Id: </span>
              <span className="mulish-normal-blue-whale-20px">7649</span>
            </span>
          </NombreDelCliente>
        </GroupEmisor1>
        <GroupEmisor2>
          <NombreDelContacto>
            <span>
              <span className="mulish-bold-blue-whale-20px">Nombre del contacto: </span>
              <span className="mulish-bold-blue-whale-20px-2">Deylin Sevilla Sevilla</span>
            </span>
          </NombreDelContacto>
        </GroupEmisor2>
        <GroupEmisor
          spanText1={groupEmisor5Props.spanText1}
          spanText2={groupEmisor5Props.spanText2}
          spanText3={groupEmisor5Props.spanText3}
          spanText4={groupEmisor5Props.spanText4}
        />
        <GroupEmisor
          spanText1={groupEmisor6Props.spanText1}
          spanText2={groupEmisor6Props.spanText2}
          spanText3={groupEmisor6Props.spanText3}
          spanText4={groupEmisor6Props.spanText4}
        />
        <Line3 src="/img/line-3-1.svg" alt="Line 4" />
        <FileUpload>
          <HeaderTable>
            <Consecutivo>Consecutivo</Consecutivo>
            <CdigoItem>Código Item</CdigoItem>
            <Consecutivo>Detalle del item</Consecutivo>
            <Cantidad>Cantidad</Cantidad>
            <PrecioUnitario>Precio Unitario</PrecioUnitario>
            <PrecioUnitario>Descuento</PrecioUnitario>
            <PrecioUnitario>% IVA</PrecioUnitario>
            <Subtotal>Subtotal</Subtotal>
          </HeaderTable>
          <Line31 src="/img/line-3-2.svg" alt="Line 3" />
          <ContentTable />
          <ContentTable />
          <Line31 src="/img/line-3-2.svg" alt="Line 2" />
          <FooterTable>
            <TotalTable subtotal={totalTable1Props.subtotal} />
            <TotalTable1>
              <Descuento>% Descuento:</Descuento>
              <Price>₡ 120,000.00</Price>
            </TotalTable1>
          </FooterTable>
          <TotalTable subtotal={totalTable2Props.subtotal} />
          <TotalTable subtotal={totalTable3Props.subtotal} />
          <TotalTable subtotal={totalTable4Props.subtotal} />
          <TotalTable subtotal={totalTable5Props.subtotal} />
          <TotalTable subtotal={totalTable6Props.subtotal} />
          <TotalTable subtotal={totalTable7Props.subtotal} />
          <TotalTable2>
            <MontoTotalDeLaFactura>Monto Total de la factura:</MontoTotalDeLaFactura>
            <Price1>₡ 120,000.00</Price1>
          </TotalTable2>
        </FileUpload>
      </Detail>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 0px;
  position: relative;
  align-self: stretch;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 1270px;
  align-items: center;
  gap: 24px;
  padding: 30px 0px;
  position: relative;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 6px 8px #0000000d;
`;

const FacturaNF56382 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWhite32px}
            position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 38.4px;
  white-space: nowrap;
`;

const Span13 = styled.span`
  ${MulishBoldBlueWhale20px}
  line-height: 24.0px;
`;

const Line3 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1270px;
  height: 1px;
  object-fit: cover;
`;

const InformacinDelCliente = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldAzureRadiance24px}
            position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const GroupEmisor1 = styled.div`
  ${MulishBoldWhite20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const GroupEmisor2 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const HeaderTable = styled.div`
  ${MulishBoldBlueWhale20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const NombreDelCliente = styled.p`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NombreDelContacto = styled.p`
  ${ValignTextMiddle}
  ${MulishBoldWhite20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FileUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 24px;
  position: relative;
  align-self: stretch;
`;

const Consecutivo = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const CdigoItem = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 118px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Cantidad = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 90px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const PrecioUnitario = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Subtotal = styled.div`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Line31 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1222px;
  height: 1px;
  object-fit: cover;
`;

const FooterTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 32px 0px 0px;
  position: relative;
  align-self: stretch;
`;

const TotalTable1 = styled.div`
  display: flex;
  width: 1270px;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 24px;
  position: relative;
  margin-left: -48px;
`;

const Descuento = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldBlueWhale18px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Price = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale18px}
            position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const TotalTable2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const MontoTotalDeLaFactura = styled.p`
  ${ValignTextMiddle}
  ${MulishBoldHollywoodCerise24px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldBlueWhale24px}
            position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 0px;
  position: relative;
  align-self: stretch;
`;

const Detail1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1270px;
  align-items: center;
  gap: 24px;
  padding: 30px 0px;
  position: relative;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 6px 8px #0000000d;
`;

const FacturaNF563821 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWhite32px}
            position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 38.4px;
  white-space: nowrap;
`;

const Span1 = styled.span`
  ${MulishBoldBlueWhale20px}
  line-height: 24.0px;
`;

const Line32 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1270px;
  height: 1px;
  object-fit: cover;
`;

const InformacinDelCliente1 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldAzureRadiance24px}
            position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const GroupEmisor3 = styled.div`
  ${MulishBoldWhite20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const GroupEmisor4 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const HeaderTable1 = styled.div`
  ${MulishBoldBlueWhale20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const NombreDelCliente1 = styled.p`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const NombreDelContacto1 = styled.p`
  ${ValignTextMiddle}
  ${MulishBoldWhite20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FileUpload1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 24px;
  position: relative;
  align-self: stretch;
`;

const Consecutivo1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const CdigoItem1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 118px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Cantidad1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 90px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const PrecioUnitario1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Subtotal1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Line33 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1222px;
  height: 1px;
  object-fit: cover;
`;

const FooterTable1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 32px 0px 0px;
  position: relative;
  align-self: stretch;
`;

const TotalTable3 = styled.div`
  display: flex;
  width: 1270px;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 24px;
  position: relative;
  margin-left: -48px;
`;

const Descuento1 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldBlueWhale18px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Price2 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale18px}
            position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const TotalTable4 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const MontoTotalDeLaFactura1 = styled.p`
  ${ValignTextMiddle}
  ${MulishBoldHollywoodCerise24px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Price3 = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldBlueWhale24px}
            position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

export default Container3;
