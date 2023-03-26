import React from "react";
import { Link } from "react-router-dom";
import UploadIcon2 from "../UploadIcon2";
import styled from "styled-components";
import { MulishBoldWhite16px, ValignTextMiddle } from "../../styledMixins";
import "./CargaMasiva9.css";

function CargaMasiva9(props) {
  const { label } = props;

  return (
    <div className="carga-masiva5 screen">
      <CargaMasiva>
        <Modal>
          <OverlapGroup1>
            <Frame9>
              <a href="javascript:history.back()">
                <XCircle src="/img/x-circle.svg" alt="x-circle" />
              </a>
            </Frame9>
            <UploadIcon2 />
            <Link to="/carga-masiva-1">
              <CTA>
                <Label>{label}</Label>
              </CTA>
            </Link>
          </OverlapGroup1>
        </Modal>
      </CargaMasiva>
    </div>
  );
}

const CargaMasiva = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 1024px;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  position: relative;
  min-width: 649px;
  height: 589px;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  width: 649px;
  height: 590px;
  border-radius: 20px;
`;

const Frame9 = styled.div`
  position: absolute;
  height: 590px;
  top: 0;
  left: 0;
  display: flex;
  padding: 24px 25px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 649px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
`;

const XCircle = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const CTA = styled.div`
  display: flex;
  width: 282px;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 9px 14px;
  position: absolute;
  top: 404px;
  left: 184px;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(240.00000089406967, 0, 183.00000429153442) 0%,
    rgb(2.000000118277967, 141.0000067949295, 249.00000035762787) 100%
  );
  cursor: pointer;
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

export default CargaMasiva9;
