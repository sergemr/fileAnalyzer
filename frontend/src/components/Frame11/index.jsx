import React from "react";
import Browser from "../Browser";
import Frame4 from "../Frame4";
import styled from "styled-components";
import { MulishNormalBlueWhale20px2, ValignTextMiddle } from "../../styledMixins";


function Frame11(props) {
  const { frame41Props, frame42Props } = props;

  return (
    <Frame111>
      <Browser />
      <Browser1>
        <FechaInicio>Fecha Inicio</FechaInicio>
        <Frame4 date={frame41Props.date} />
      </Browser1>
      <Browser1>
        <FechaInicio>Fecha Fin</FechaInicio>
        <Frame4 date={frame42Props.date} />
      </Browser1>
    </Frame111>
  );
}

const Frame111 = styled.div`
  ${MulishNormalBlueWhale20px2}
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
`;

const FechaInicio = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame112 = styled.div`
  ${MulishNormalBlueWhale20px2}
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const Browser2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const FechaInicio1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Frame11;
