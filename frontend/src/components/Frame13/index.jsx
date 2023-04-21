import React from "react";
import DateComponentSet from "../DateComponentSet";
import styled from "styled-components";


function Frame13(props) {
  const {
    dateComponentSet1Props,
    dateComponentSet2Props,
    dateComponentSet3Props,
    dateComponentSet4Props,
    dateComponentSet5Props,
    dateComponentSet6Props,
    dateComponentSet7Props,
  } = props;

  return (
    <Frame131>
      <DateComponentSet className={dateComponentSet1Props.className}>
        {dateComponentSet1Props.children}
      </DateComponentSet>
      <DateComponentSet className={dateComponentSet2Props.className}>
        {dateComponentSet2Props.children}
      </DateComponentSet>
      <DateComponentSet className={dateComponentSet3Props.className}>
        {dateComponentSet3Props.children}
      </DateComponentSet>
      <DateComponentSet className={dateComponentSet4Props.className}>
        {dateComponentSet4Props.children}
      </DateComponentSet>
      <DateComponentSet className={dateComponentSet5Props.className}>
        {dateComponentSet5Props.children}
      </DateComponentSet>
      <DateComponentSet className={dateComponentSet6Props.className}>
        {dateComponentSet6Props.children}
      </DateComponentSet>
      <DateComponentSet className={dateComponentSet7Props.className}>
        {dateComponentSet7Props.children}
      </DateComponentSet>
    </Frame131>
  );
}

const Frame131 = styled.div`
  display: flex;
  position: relative;
  margin-top: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;

const Frame132 = styled.div`
  display: flex;
  position: relative;
  margin-top: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;

export default Frame13;
