import React from "react";
import styled from "styled-components";
import { MulishBoldBlueWhale18px, MulishNormalBlueWhale18px, ValignTextMiddle } from "../../styledMixins";


function TotalTable(props) {
  const { subtotal } = props;

  return (
    <TotalTable1>
      <Subtotal>{subtotal}</Subtotal>
      <Price>₡ 120,000.00</Price>
    </TotalTable1>
  );
}

const TotalTable1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const Subtotal = styled.div`
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

const Subtotal1 = styled.div`
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

const Price1 = styled.div`
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

export default TotalTable;
