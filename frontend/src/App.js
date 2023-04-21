import logo from "./logo.svg";
import "./App.css";
import Members from "./components/Members/Members";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import MenuOption from "./components/MenuOption";
import MenuOption2 from "./components/MenuOption2";
import MenuOption3 from "./components/MenuOption3";
import LeerDocumento5 from "./components/LeerDocumento5";
import Login from "./components/Login";
import LeerDocumento1 from "./components/LeerDocumento1";
import LeerDocumento6 from "./components/LeerDocumento6";
import CargaMasiva1 from "./components/CargaMasiva1";
import ConsultarDocumentos1 from "./components/ConsultarDocumentos1";
import LeerDocumento2 from "./components/LeerDocumento2";
import CargaMasiva2 from "./components/CargaMasiva2";
import LeerDocumento4 from "./components/LeerDocumento4";
import CargaMasiva3 from "./components/CargaMasiva3";
import ConsultarDocumentos2 from "./components/ConsultarDocumentos2";
import LeerDocumento3 from "./components/LeerDocumento3";
import CargaMasiva32 from "./components/CargaMasiva32";
import CargaMasiva4 from "./components/CargaMasiva4";
import ConsultarDocumentos4 from "./components/ConsultarDocumentos4";
import LeerDocumento from "./components/LeerDocumento";
import CargaMasiva from "./components/CargaMasiva";
import CargaMasiva5 from "./components/CargaMasiva5";
import LeerDocumento7 from "./components/LeerDocumento7";
import ConsultarDocumentos from "./components/ConsultarDocumentos";
import CargaMasiva6 from "./components/CargaMasiva6";
import LeerDocumento8 from "./components/LeerDocumento8";
import CargaMasiva7 from "./components/CargaMasiva7";
import ConsultarDocumentos3 from "./components/ConsultarDocumentos3";
import CargaMasiva8 from "./components/CargaMasiva8";
import LeerDocumento9 from "./components/LeerDocumento9";
import CargaMasiva9 from "./components/CargaMasiva9";
import ConsultarDocumentos5 from "./components/ConsultarDocumentos5";

const logo17Data = {
  logo_Vector: "/img/logo-vector@2x.png",
};

const leerDocumento8Data = {
  logoProps: logo17Data,
};

const loginData = {
  searchHeader8001F49142870A5C1428Edf:
    "/img/search-header-800-1f49142870a5c1428edf0f570465ce9114ca4dc76f9d64.png",
  contenedor_Bg: "/img/contenedor-bg.png",
  title: ".Project",
  spanText1: (
    <React.Fragment>
      Inicie sesión con su cuenta <br />
    </React.Fragment>
  ),
  spanText2: "AI.project",
  usuario: "Usuario",
  inputType1: "text",
  inputPlaceholder1: "Ingrese su usuario",
  contrasea: "Contraseña",
  inputType2: "password",
  inputPlaceholder2: "Ingrese su contraseña",
  ingresar: "INGRESAR",
};
const logo2Data = {
  logo_Vector: "/img/logo-vector@2x.png",
};
const leerDocumento1Data = {
  salir: "Salir",
  cargaMasiva: "Carga masiva",
  consultarDocumentos: "Consultar documentos",
  uploadIcon: "/img/upload-icon-1@2x.png",
  spanText1: "Arrastrar & soltar archivos o",
  spanText2: " ",
  spanText3: "Buscar en el equipo",
  formatosSoportadosDocTxtPdf: "Formatos soportados: doc, txt, pdf",
  logoProps: logo2Data,
};
function App() {
  return (
    <div className="App">
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Router>
          <Routes>
            <Route path="/members" element={<Members />} />
            <Route
              path="/leer-documento3"
              element={
                <LeerDocumento8
                  salir="Salir"
                  cargaMasiva="Carga masiva"
                  consultarDocumentos="Consultar documentos"
                  logoProps={leerDocumento8Data.logoProps}
                />
              }
            />
            <Route
              path="/leer-documento3"
              element={
                <LeerDocumento8
                  salir="Salir"
                  cargaMasiva="Carga masiva"
                  consultarDocumentos="Consultar documentos"
                  logoProps={leerDocumento8Data.logoProps}
                />
              }
            />

            <Route path="/home" element={<Home replace to="/home" />} />
            <Route
              path="/"
              element={<LeerDocumento1 {...leerDocumento1Data} />}
            />
            <Route path="/login" element={<Login {...loginData} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
