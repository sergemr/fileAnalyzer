import React from "react";
import styled from "styled-components";
import { MulishMediumFiord26px } from "../../styledMixins";


function DateComponentSet(props) {
  const { children, className } = props;

  return (
    <DateComponentSet1 className={`date-component-set ${className || ""}`}>
      <Number className="number">{children}</Number>
    </DateComponentSet1>
  );
}

const DateComponentSet1 = styled.article`
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

const Number = styled.div`
  ${MulishMediumFiord26px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const X1 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X11 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X12 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-6-1  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X13 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-7  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X14 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-8  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X15 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.date-component-set-1  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X16 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X17 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4-1  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X18 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5-1  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X19 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-6-2  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X110 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-7-1  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X111 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-8-1  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X112 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.date-component-set-2  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X113 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-3-1  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X114 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4-2  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X115 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5-2  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X116 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-6-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X117 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-7-2  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X118 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-8-2  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X119 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.date-component-set-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X120 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-3-2  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X121 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X122 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X123 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X124 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X125 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-6-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X126 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-7-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X127 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-8-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X128 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.date-component-set-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X129 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-3-3  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X130 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X131 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X132 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-6-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X133 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-7-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X134 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-8-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X135 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.date-component-set-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X136 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-3-4  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X137 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4-6  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X138 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5-6  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X139 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-6-6  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X140 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-7-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X141 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-8-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X142 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.date-component-set-6  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X143 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-3-5  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X144 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-4-7  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

const X145 = styled.div`
  ${MulishMediumFiord26px}

  .date-component-set.component-5-7  & {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

export default DateComponentSet;
