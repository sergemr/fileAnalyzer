import React from "react";
import styled from "styled-components";
import { MulishNormalBlueWhale20px, MulishNormalBlueWhale20px2, ValignTextMiddle } from "../../styledMixins";


function Browser() {
  return (
    <Browser1>
      <Buscar>Buscar</Buscar>
      <Frame4>
        <IngresarNmeroDeFacturaOEmisor>Ingresar número de factura o emisor</IngresarNmeroDeFacturaOEmisor>
        <IconSearch src="/img/search.svg" alt="icon-search" />
      </Frame4>
    </Browser1>
  );
}

const Browser1 = styled.div`
  display: flex;
  width: 582px;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const Buscar = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px2}
            position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame4 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
  flex: 1;
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--star-dust);
`;

const IngresarNmeroDeFacturaOEmisor = styled.p`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const IconSearch = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Browser2 = styled.div`
  display: flex;
  width: 582px;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const Buscar1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame41 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
  flex: 1;
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--star-dust);
`;

const IngresarNmeroDeFacturaOEmisor1 = styled.p`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const IconSearch1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Browser3 = styled.div`
  display: flex;
  width: 582px;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const Buscar2 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px2}
            position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame42 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
  flex: 1;
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--star-dust);
`;

const IngresarNmeroDeFacturaOEmisor2 = styled.p`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Search = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Browser4 = styled.div`
  display: flex;
  width: 582px;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const Buscar3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame43 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
  flex: 1;
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--star-dust);
`;

const IngresarNmeroDeFacturaOEmisor3 = styled.p`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Search1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Browser;
