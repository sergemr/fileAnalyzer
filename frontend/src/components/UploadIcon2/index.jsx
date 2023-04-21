import React from "react";
import styled from "styled-components";
import { MulishNormalGraniteGray18px, MulishBoldBlueWhale24px, ValignTextMiddle } from "../../styledMixins";


function UploadIcon2() {
  return (
    <UploadIcon>
      <OverlapGroup>
        <Vector src="/img/vector-11.svg" alt="Vector" />
        <IconCloud src="/img/vector-12.svg" alt="icon-cloud" />
        <Vector1 src="/img/vector-13.svg" alt="Vector" />
        <IconCheckMark src="/img/check-1.svg" alt="icon-check_mark" />
      </OverlapGroup>
      <Title>Carga realizada</Title>
      <LaCargaMasivaSeR>La carga masiva se realizó correctamente</LaCargaMasivaSeR>
    </UploadIcon>
  );
}

const UploadIcon = styled.div`
  position: absolute;
  width: 358px;
  top: 150px;
  left: 146px;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  align-items: center;
  min-height: 201px;
`;

const OverlapGroup = styled.div`
  width: 126px;
  height: 112px;
  position: relative;
  margin-right: 0.93px;
`;

const Vector = styled.img`
  position: absolute;
  width: 21px;
  height: 17px;
  top: 11px;
  left: 65px;
`;

const IconCloud = styled.img`
  position: absolute;
  width: 126px;
  height: 80px;
  top: 0;
  left: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 67px;
  height: 69px;
  top: 43px;
  left: 29px;
`;

const IconCheckMark = styled.img`
  position: absolute;
  width: 42px;
  height: 42px;
  top: 59px;
  left: 42px;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  ${MulishBoldBlueWhale24px}
            height: 24px;
  margin-top: 32px;
  margin-right: 3px;
  min-width: 184px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const LaCargaMasivaSeR = styled.p`
  ${ValignTextMiddle}
  ${MulishNormalGraniteGray18px}
            height: 18px;
  position: relative;
  margin-top: 9px;
  margin-right: 2px;
  min-width: 346px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const UploadIcon1 = styled.div`
  position: absolute;
  width: 358px;
  top: 150px;
  left: 146px;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  align-items: center;
  min-height: 201px;
`;

const OverlapGroup1 = styled.div`
  width: 126px;
  height: 112px;
  position: relative;
  margin-right: 0.93px;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 21px;
  height: 17px;
  top: 11px;
  left: 65px;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 126px;
  height: 80px;
  top: 0;
  left: 0;
`;

const Vector4 = styled.img`
  position: absolute;
  width: 67px;
  height: 69px;
  top: 43px;
  left: 29px;
`;

const Check = styled.img`
  position: absolute;
  width: 42px;
  height: 42px;
  top: 59px;
  left: 42px;
`;

const Title1 = styled.h1`
  ${ValignTextMiddle}
  ${MulishBoldBlueWhale24px}
            height: 24px;
  margin-top: 32px;
  margin-right: 3px;
  min-width: 184px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const LaCargaMasivaSeR1 = styled.p`
  ${ValignTextMiddle}
  ${MulishNormalGraniteGray18px}
            height: 18px;
  position: relative;
  margin-top: 9px;
  margin-right: 2px;
  min-width: 346px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default UploadIcon2;