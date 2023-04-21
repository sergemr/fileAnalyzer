import React from "react";
import styled from "styled-components";
import { MulishNormalBlueWhale20px, ValignTextMiddle } from "../../styledMixins";


function Frame4(props) {
  const { date } = props;

  return (
    <Frame41>
      <Date>{date}</Date>
      <IconCalendar src="/img/calendar.svg" alt="icon-calendar" />
    </Frame41>
  );
}

const Frame41 = styled.div`
  display: flex;
  width: 180px;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--star-dust);
`;

const Date = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const IconCalendar = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Frame42 = styled.div`
  display: flex;
  width: 180px;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--star-dust);
`;

const Date1 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Calendar = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Frame4;
