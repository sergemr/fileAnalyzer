import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MulishBoldWhite16px,
  MulishNormalBlueWhale16px,
  MulishNormalBlueWhale20px2,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Login.css";

function Login(props) {
  const {
    searchHeader8001F49142870A5C1428Edf,
    contenedor_Bg,
    title,
    spanText1,
    spanText2,
    usuario,
    inputType1,
    inputPlaceholder1,
    contrasea,
    inputType2,
    inputPlaceholder2,
    ingresar,
  } = props;

  return (
    <div className="login screen">
      <Content>
        <LogImg>
          <Group2>
            <OverlapGroup1>
              <LogBg>
                <SearchHeader8001f49142870a5c1428edf
                  src={searchHeader8001F49142870A5C1428Edf}
                  alt="search-header-800-1f49142870a5c1428edf0f570465ce9114ca4dc76f9d645bcf5c786a18dc697f 1"
                />
                <ContenedorBg src={contenedor_Bg} alt="Contenedor_bg" />
              </LogBg>
              <Logo>
                <OverlapGroup>
                  <Rectangle1 src="/img/rectangle-1.svg" alt="Rectangle 1" />
                  <Rectangle2 src="/img/rectangle-2.svg" alt="Rectangle 2" />
                </OverlapGroup>
                <Title>{title}</Title>
              </Logo>
            </OverlapGroup1>
          </Group2>
        </LogImg>
        <LogArea>
          <InicieSesinConSuCuentaAIproject>
            <Span01>{spanText1}</Span01>
            <Span11>{spanText2}</Span11>
          </InicieSesinConSuCuentaAIproject>
          <Form>
            <InputUser>
              <Usuario>{usuario}</Usuario>
              <OverlapGroup2>
                <IngreseSuUsuario name="ingresesuusuario" placeholder={inputPlaceholder1} type={inputType1} />
                <Rectangle3></Rectangle3>
              </OverlapGroup2>
            </InputUser>
            <InputPassword>
              <Usuario>{contrasea}</Usuario>
              <Group3>
                <IngreseSuContrasea name="ingresesucontraseña" placeholder={inputPlaceholder2} type={inputType2} />
                <Rectangle3></Rectangle3>
              </Group3>
            </InputPassword>
          </Form>
          <CtaLogin>
            <OverlapGroup2>
              <Link to="/leer-documento-1">
                <Rectangle4></Rectangle4>
              </Link>
              <INGRESAR onClick={()=> location.href="/leer-documento-1"}>{ingresar}</INGRESAR>
            </OverlapGroup2>
          </CtaLogin>
        </LogArea>
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 84px;
  position: relative;
`;

const LogImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 564px;
  align-items: flex-start;
  gap: 10px;
  position: relative;
`;

const Group2 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 564px;
  height: 680px;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  width: 564px;
  height: 680px;
  border-radius: 17.3px;
`;

const LogBg = styled.div`
  height: 680px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 564px;
  gap: 4741px;
  background-color: #002349;
  border-radius: 40px;
  overflow: hidden;
`;

const SearchHeader8001f49142870a5c1428edf = styled.img`
  width: 564px;
  height: 676px;
  mix-blend-mode: hard-light;
`;

const ContenedorBg = styled.img`
  width: 564px;
  height: 680px;
  align-self: flex-end;
  margin-bottom: -1991px;
`;

const Logo = styled.div`
  position: absolute;
  width: 564px;
  height: 680px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 96px 62px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 17.3px;
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  height: 129px;
  margin-top: 273px;
  display: flex;
  padding: 0 20px;
  align-items: flex-start;
  min-width: 122px;
  gap: 15px;
  background-image: url(/img/vector-1--stroke-.svg);
  background-size: 100% 100%;
`;

const Rectangle1 = styled.img`
  width: 34px;
  height: 104px;
  align-self: flex-end;
`;

const Rectangle2 = styled.img`
  width: 31px;
  height: 12px;
`;

const Title = styled.h1`
  min-height: 70px;
  font-family: var(--font-family-jetbrains_mono);
  font-weight: 800;
  color: var(--white);
  font-size: 52.8px;
  letter-spacing: 0;
  line-height: normal;
`;

const LogArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 624px;
  height: 571px;
  align-items: flex-start;
  justify-content: center;
  gap: 48px;
  position: relative;
`;

const InicieSesinConSuCuentaAIproject = styled.p`
  position: relative;
  align-self: stretch;
  height: 82px;
  font-family: var(--font-family-mulish);
  font-weight: 950;
  color: transparent;
  font-size: 32px;
  letter-spacing: 0;
  line-height: 38.4px;
`;

const Span01 = styled.span`
  color: var(--blue-whale);
`;

const Span11 = styled.span`
  color: var(--hollywood-cerise);
`;

const Form = styled.div`
  position: relative;
  min-width: 624px;
  height: 278px;
`;

const InputUser = styled.div`
  position: absolute;
  width: 624px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 115px;
  gap: 17px;
`;

const Usuario = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalBlueWhale20px2}
            width: 624px;
  height: 36px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
`;

const OverlapGroup2 = styled.div`
  width: 624px;
  height: 63px;
  position: relative;
  border-radius: 50px;
`;

const IngreseSuUsuario = styled.input`
  ${MulishNormalBlueWhale16px}
  position: absolute;
  width: 538px;
  height: 36px;
  top: 13px;
  left: 43px;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 19.2px;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #04274d5c;
  }
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 624px;
  height: 63px;
  top: 0;
  left: 0;
  border-radius: 50px;
  border: 1px solid;
  border-color: var(--san-juan);
  pointer-events: none;
`;

const InputPassword = styled.div`
  position: absolute;
  width: 624px;
  top: 139px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 115px;
  gap: 17px;
`;

const Group3 = styled.div`
  width: 624px;
  height: 63px;
  position: relative;
`;

const IngreseSuContrasea = styled.input`
  ${MulishNormalBlueWhale16px}
  position: absolute;
  width: 560px;
  height: 19px;
  top: 22px;
  left: 32px;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #04274d5c;
  }
`;

const CtaLogin = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 626px;
  height: 63px;
  margin-right: -2px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const Rectangle4 = styled.div`
  position: absolute;
  width: 624px;
  height: 63px;
  top: 0;
  left: 0;
  border-radius: 50px;
  background: linear-gradient(
    -8deg,
    rgb(240.00000089406967, 0, 183.00000429153442) 0%,
    rgb(2.000000118277967, 141.0000067949295, 249.00000035762787) 100%
  );
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const INGRESAR = styled.div`
  ${ValignTextMiddle}
  ${MulishBoldWhite16px}
            position: absolute;
  width: 538px;
  height: 36px;
  top: 14px;
  left: 43px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
`;

export default Login;
