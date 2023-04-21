import React from "react";
import styled from "styled-components";
import { MulishNormalBlueWhale10px, ValignTextMiddle } from "../../styledMixins";


function BtnDetalle() {
  return (
    <BtnDetalle1>
      <Frame10>
        <VerDetalle>Ver detalle</VerDetalle>
      </Frame10>
    </BtnDetalle1>
  );
}

const BtnDetalle1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Frame10 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 64px;
  height: 24px;
  margin-left: -2px;
  border-radius: 20px;
  border: 1px solid;
  border-color: var(--blue-whale);
`;

const VerDetalle = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale10px}
            position: absolute;
  height: 12px;
  top: 4px;
  left: 4px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const BtnDetalle2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Frame101 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 64px;
  height: 24px;
  margin-left: -2px;
  border-radius: 20px;
  border: 1px solid;
  border-color: var(--blue-whale);
`;

const VerDetalle1 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale10px}
            position: absolute;
  height: 12px;
  top: 4px;
  left: 4px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const BtnDetalle3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Frame102 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 64px;
  height: 24px;
  margin-left: -2px;
  border-radius: 20px;
  border: 1px solid;
  border-color: var(--blue-whale);
`;

const VerDetalle2 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale10px}
            position: absolute;
  height: 12px;
  top: 4px;
  left: 4px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const BtnDetalle4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Frame103 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 64px;
  height: 24px;
  margin-left: -2px;
  border-radius: 20px;
  border: 1px solid;
  border-color: var(--blue-whale);
`;

const VerDetalle3 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale10px}
            position: absolute;
  height: 12px;
  top: 4px;
  left: 4px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

export default BtnDetalle;
