import React from "react";
import { Link } from "react-router-dom";
import DateComponentSet from "../DateComponentSet";
import DateComponentSet2 from "../DateComponentSet2";
import Frame13 from "../Frame13";
import styled from "styled-components";
import {
  MulishMediumFiord26px,
  MulishMediumFiord22px,
  MulishBoldWhite16px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./CargaMasiva3.css";

function CargaMasiva3(props) {
  const {
    title,
    arrowLeft,
    navbarLinkPrice1,
    navbarLinkM1,
    navbarLinkM2,
    navbarLinkJ,
    navbarLinkV,
    navbarLinkPrice2,
    navbarLinkD,
    label,
    dateComponentSet1Props,
    dateComponentSet21Props,
    dateComponentSet22Props,
    dateComponentSet23Props,
    dateComponentSet2Props,
    dateComponentSet3Props,
    dateComponentSet4Props,
    dateComponentSet5Props,
    dateComponentSet6Props,
    dateComponentSet7Props,
    dateComponentSet8Props,
    dateComponentSet9Props,
    dateComponentSet10Props,
    dateComponentSet11Props,
    frame131Props,
    frame132Props,
    dateComponentSet12Props,
    dateComponentSet13Props,
    dateComponentSet14Props,
    dateComponentSet15Props,
  } = props;

  return (
    <div className="carga-masiva-3-2 screen">
      <CargaMasiva31>
        <Group10>
          <FlexCol>
            <Frame18>
              <VuesaxlineararrowLeft src="/img/vuesax-linear-arrow-left.svg" alt="vuesax/linear/arrow-left" />
              <Title>{title}</Title>
              <VuesaxlineararrowLeft src={arrowLeft} alt="arrow-left" />
            </Frame18>
            <Navbar>
              <NavbarLinkPrice>{navbarLinkPrice1}</NavbarLinkPrice>
              <NavbarLinkPrice>{navbarLinkM1}</NavbarLinkPrice>
              <NavbarLinkPrice>{navbarLinkM2}</NavbarLinkPrice>
              <NavbarLinkPrice>{navbarLinkJ}</NavbarLinkPrice>
              <NavbarLinkPrice>{navbarLinkV}</NavbarLinkPrice>
              <NavbarLinkPrice>{navbarLinkPrice2}</NavbarLinkPrice>
              <NavbarLinkPrice>{navbarLinkD}</NavbarLinkPrice>
            </Navbar>
            <OverlapGroup>
              <Rectangle8></Rectangle8>
              <Frame11>
                <DateComponentSet>{dateComponentSet1Props.children}</DateComponentSet>
                <DateComponentSet2>{dateComponentSet21Props.children}</DateComponentSet2>
                <DateComponentSet2>{dateComponentSet22Props.children}</DateComponentSet2>
                <DateComponentSet2>{dateComponentSet23Props.children}</DateComponentSet2>
                <DateComponentSet>{dateComponentSet2Props.children}</DateComponentSet>
                <DateComponentSet>{dateComponentSet3Props.children}</DateComponentSet>
                <DateComponentSet>{dateComponentSet4Props.children}</DateComponentSet>
              </Frame11>
            </OverlapGroup>
            <Frame12>
              <DateComponentSet>{dateComponentSet5Props.children}</DateComponentSet>
              <DateComponentSet>{dateComponentSet6Props.children}</DateComponentSet>
              <DateComponentSet className={dateComponentSet7Props.className}>
                {dateComponentSet7Props.children}
              </DateComponentSet>
              <DateComponentSet className={dateComponentSet8Props.className}>
                {dateComponentSet8Props.children}
              </DateComponentSet>
              <DateComponentSet className={dateComponentSet9Props.className}>
                {dateComponentSet9Props.children}
              </DateComponentSet>
              <DateComponentSet className={dateComponentSet10Props.className}>
                {dateComponentSet10Props.children}
              </DateComponentSet>
              <DateComponentSet className={dateComponentSet11Props.className}>
                {dateComponentSet11Props.children}
              </DateComponentSet>
            </Frame12>
            <Frame13
              dateComponentSet1Props={frame131Props.dateComponentSet1Props}
              dateComponentSet2Props={frame131Props.dateComponentSet2Props}
              dateComponentSet3Props={frame131Props.dateComponentSet3Props}
              dateComponentSet4Props={frame131Props.dateComponentSet4Props}
              dateComponentSet5Props={frame131Props.dateComponentSet5Props}
              dateComponentSet6Props={frame131Props.dateComponentSet6Props}
              dateComponentSet7Props={frame131Props.dateComponentSet7Props}
            />
            <Frame13
              dateComponentSet1Props={frame132Props.dateComponentSet1Props}
              dateComponentSet2Props={frame132Props.dateComponentSet2Props}
              dateComponentSet3Props={frame132Props.dateComponentSet3Props}
              dateComponentSet4Props={frame132Props.dateComponentSet4Props}
              dateComponentSet5Props={frame132Props.dateComponentSet5Props}
              dateComponentSet6Props={frame132Props.dateComponentSet6Props}
              dateComponentSet7Props={frame132Props.dateComponentSet7Props}
            />
            <Frame15>
              <DateComponentSet className={dateComponentSet12Props.className}>
                {dateComponentSet12Props.children}
              </DateComponentSet>
              <DateComponentSet className={dateComponentSet13Props.className}>
                {dateComponentSet13Props.children}
              </DateComponentSet>
              <DateComponentSet className={dateComponentSet14Props.className}>
                {dateComponentSet14Props.children}
              </DateComponentSet>
              <DateComponentSet className={dateComponentSet15Props.className}>
                {dateComponentSet15Props.children}
              </DateComponentSet>
            </Frame15>
            <Link to="/consultar-documentos-4">
              <CTA>
                <Label>{label}</Label>
              </CTA>
            </Link>
          </FlexCol>
        </Group10>
      </CargaMasiva31>
    </div>
  );
}

const CargaMasiva31 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
`;

const Group10 = styled.div`
  position: relative;
  min-width: 653px;
  height: 593px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 20px #00000033;
`;

const FlexCol = styled.div`
  position: relative;
  width: 576px;
  left: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 569px;
`;

const Frame18 = styled.div`
  display: flex;
  position: relative;
  margin-right: 12px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;
`;

const VuesaxlineararrowLeft = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  ${MulishMediumFiord26px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const NavbarLinkPrice = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Navbar = styled.div`
  ${MulishMediumFiord22px}
  display: flex;
  position: relative;
  margin-top: 38px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 72px;
`;

const OverlapGroup = styled.div`
  width: 576px;
  height: 60px;
  position: relative;
  margin-top: 22px;
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 221px;
  height: 39px;
  top: 12px;
  left: 92px;
  background-color: var(--hollywood-cerise);
  border-radius: 50px;
`;

const Frame11 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 26px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Frame12 = styled.div`
  display: flex;
  position: relative;
  margin-top: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;

const Frame15 = styled.div`
  display: flex;
  position: relative;
  align-self: flex-start;
  margin-top: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 26px;
  padding: 0px 0px 20px;
`;

const CTA = styled.div`
  display: flex;
  position: relative;
  margin-top: 8px;
  margin-right: 12px;
  width: 512px;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 9px 14px;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(240.00000089406967, 0, 183.00000429153442) 0%,
    rgb(2.000000118277967, 141.0000067949295, 249.00000035762787) 100%
  );
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWhite16px}
            position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default CargaMasiva3;
