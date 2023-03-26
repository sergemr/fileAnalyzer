import React from "react";
import styled from "styled-components";
import { MulishNormalBlueWhale18px, ValignTextMiddle } from "../../styledMixins";


function ContentTable() {
  return (
    <ContentTable1>
      <Number>212</Number>
      <F56382>F-56382</F56382>
      <EmpresaX>Empresa X</EmpresaX>
      <Date>01/03/23</Date>
      <Price>₡ 120,000.00</Price>
      <Price>₡ 120,000.00</Price>
      <Price>₡ 120,000.00</Price>
      <Price1>₡ 120,000.00</Price1>
    </ContentTable1>
  );
}

const ContentTable1 = styled.div`
  ${MulishNormalBlueWhale18px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 116px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const F56382 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 118px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const EmpresaX = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 149px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Date = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 90px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Price = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const ContentTable2 = styled.div`
  ${MulishNormalBlueWhale18px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const Number1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 116px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const F563821 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 118px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const EmpresaX1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 149px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Date1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 90px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Price2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: 150px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

const Price3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
`;

export default ContentTable;
