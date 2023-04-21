import React from "react";
import styled from "styled-components";
import { MulishMediumWhite26px } from "../../styledMixins";


function DateComponentSet2(props) {
  const { children } = props;

  return (
    <Component3>
      <X1>{children}</X1>
    </Component3>
  );
}

const Component3 = styled.article`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  position: relative;
  border-radius: 10px;
`;

const X1 = styled.div`
  ${MulishMediumWhite26px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Component31 = styled.article`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  position: relative;
  border-radius: 10px;
`;

const X11 = styled.div`
  ${MulishMediumWhite26px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default DateComponentSet2;
