import React from "react";
import styled from "styled-components";
import { MulishBoldWhite20px, ValignTextMiddle } from "../../styledMixins";


function GroupEmisor(props) {
  const { spanText1, spanText2, spanText3, spanText4 } = props;

  return (
    <GroupEmisor1>
      <NombreDelEmisor1234>
        <span>
          <span className="mulish-bold-blue-whale-20px">{spanText1}</span>
          <span className="mulish-normal-blue-whale-20px">{spanText2}</span>
        </span>
      </NombreDelEmisor1234>
      <NombreDelEmisor1234>
        <span>
          <span className="mulish-bold-blue-whale-20px">{spanText3}</span>
          <span className="mulish-normal-blue-whale-20px">{spanText4}</span>
        </span>
      </NombreDelEmisor1234>
    </GroupEmisor1>
  );
}

const GroupEmisor1 = styled.div`
  ${MulishBoldWhite20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const NombreDelEmisor1234 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const GroupEmisor2 = styled.div`
  ${MulishBoldWhite20px}
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const NombreDelEmisor12341 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default GroupEmisor;
