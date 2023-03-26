
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/leer-documento-5">
          <LeerDocumento5
            salir="Salir"
            cargaMasiva="Carga masiva"
            consultarDocumentos="Consultar documentos"
            label="LEER DOCUMENTO"
            logoProps={leerDocumento5Data.logoProps}
            uploadingFile11Props={leerDocumento5Data.uploadingFile11Props}
            uploadingFile12Props={leerDocumento5Data.uploadingFile12Props}
          />
        </Route>
        <Route path="/:path(|login)">
          <Login {...loginData} />
        </Route>
        <Route path="/leer-documento-1">
          <LeerDocumento1 {...leerDocumento1Data} />
        </Route>
        <Route path="/leer-documento-6">
          <LeerDocumento6 label="OK" />
        </Route>
        <Route path="/carga-masiva-1">
          <CargaMasiva1
            salir="Salir"
            leerDocumento="Leer documento"
            consultarDocumentos="Consultar documentos"
            logoProps={cargaMasiva1Data.logoProps}
            uploadFileArea2Props={cargaMasiva1Data.uploadFileArea2Props}
            documentName1Props={cargaMasiva1Data.documentName1Props}
            documentName2Props={cargaMasiva1Data.documentName2Props}
          />
        </Route>
        <Route path="/consultar-documentos-1">
          <ConsultarDocumentos1 {...consultarDocumentos1Data} />
        </Route>
        <Route path="/leer-documento-2">
          <LeerDocumento2
            salir="Salir"
            cargaMasiva="Carga masiva"
            consultarDocumentos="Consultar documentos"
            logoProps={leerDocumento2Data.logoProps}
            containerProps={leerDocumento2Data.containerProps}
          />
        </Route>
        <Route path="/carga-masiva-2">
          <CargaMasiva2 {...cargaMasiva2Data} />
        </Route>
        <Route path="/leer-documento-4">
          <LeerDocumento4
            salir="Salir"
            cargaMasiva="Carga masiva"
            consultarDocumentos="Consultar documentos"
            logoProps={leerDocumento4Data.logoProps}
          />
        </Route>
        <Route path="/carga-masiva-3-2">
          <CargaMasiva3 {...cargaMasiva3Data} />
        </Route>
        <Route path="/consultar-documentos-2">
          <ConsultarDocumentos2
            salir="Salir"
            regresar="Regresar"
            logoProps={consultarDocumentos2Data.logoProps}
            container3Props={consultarDocumentos2Data.container3Props}
          />
        </Route>
        <Route path="/leer-documento-3">
          <LeerDocumento3 {...leerDocumento3Data} />
        </Route>
        <Route path="/carga-masiva-3">
          <CargaMasiva32
            salir="Salir"
            leerDocumento="Leer documento"
            consultarDocumentos="Consultar documentos"
            logoProps={cargaMasiva32Data.logoProps}
            uploadFileArea2Props={cargaMasiva32Data.uploadFileArea2Props}
            documentName1Props={cargaMasiva32Data.documentName1Props}
            documentName2Props={cargaMasiva32Data.documentName2Props}
          />
        </Route>
        <Route path="/carga-masiva-4">
          <CargaMasiva4 label="OK" />
        </Route>
        <Route path="/consultar-documentos-4">
          <ConsultarDocumentos4 {...consultarDocumentos4Data} />
        </Route>
        <Route path="/leer-documento">
          <LeerDocumento {...leerDocumentoData} />
        </Route>
        <Route path="/carga-masiva-6">
          <CargaMasiva label="OK" />
        </Route>
        <Route path="/carga-masiva">
          <CargaMasiva5
            salir="Salir"
            leerDocumento="Leer documento"
            consultarDocumentos="Consultar documentos"
            logoProps={cargaMasiva5Data.logoProps}
            uploadFileArea2Props={cargaMasiva5Data.uploadFileArea2Props}
            documentName1Props={cargaMasiva5Data.documentName1Props}
            documentName2Props={cargaMasiva5Data.documentName2Props}
          />
        </Route>
        <Route path="/leer-documento2">
          <LeerDocumento7
            salir="Salir"
            cargaMasiva="Carga masiva"
            consultarDocumentos="Consultar documentos"
            logoProps={leerDocumento7Data.logoProps}
            containerProps={leerDocumento7Data.containerProps}
          />
        </Route>
        <Route path="/consultar-documentos-3">
          <ConsultarDocumentos {...consultarDocumentosData} />
        </Route>
        <Route path="/carga-masiva2">
          <CargaMasiva6 {...cargaMasiva6Data} />
        </Route>
        <Route path="/leer-documento3">
          <LeerDocumento8
            salir="Salir"
            cargaMasiva="Carga masiva"
            consultarDocumentos="Consultar documentos"
            logoProps={leerDocumento8Data.logoProps}
          />
        </Route>
        <Route path="/carga-masiva3">
          <CargaMasiva7 {...cargaMasiva7Data} />
        </Route>
        <Route path="/consultar-documentos">
          <ConsultarDocumentos3
            salir="Salir"
            regresar="Regresar"
            logoProps={consultarDocumentos3Data.logoProps}
            container3Props={consultarDocumentos3Data.container3Props}
          />
        </Route>
        <Route path="/carga-masiva4">
          <CargaMasiva8
            salir="Salir"
            leerDocumento="Leer documento"
            consultarDocumentos="Consultar documentos"
            logoProps={cargaMasiva8Data.logoProps}
            uploadFileArea2Props={cargaMasiva8Data.uploadFileArea2Props}
            documentName1Props={cargaMasiva8Data.documentName1Props}
            documentName2Props={cargaMasiva8Data.documentName2Props}
          />
        </Route>
        <Route path="/leer-documento4">
          <LeerDocumento9 {...leerDocumento9Data} />
        </Route>
        <Route path="/carga-masiva5">
          <CargaMasiva9 label="OK" />
        </Route>
        <Route path="/consultar-documentos2">
          <ConsultarDocumentos5 {...consultarDocumentos5Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const logo1Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadingFile11Data = {
    documento1Pdf: "documento-1.pdf",
};

const uploadingFile12Data = {
    documento1Pdf: "documento-1.doc",
    className: "uploading-file-2",
};

const leerDocumento5Data = {
    salir: "Salir",
    cargaMasiva: "Carga masiva",
    consultarDocumentos: "Consultar documentos",
    label: "LEER DOCUMENTO",
    logoProps: logo1Data,
    uploadingFile11Props: uploadingFile11Data,
    uploadingFile12Props: uploadingFile12Data,
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

const logo3Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea21Data = {
    uploadIcon: "/img/upload-icon-1@2x.png",
};

const documentName1Data = {
    children: "Seleccione carpeta de origen",
};

const documentName2Data = {
    children: "Seleccione carpeta de origen",
};

const cargaMasiva1Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    consultarDocumentos: "Consultar documentos",
    logoProps: logo3Data,
    uploadFileArea2Props: uploadFileArea21Data,
    documentName1Props: documentName1Data,
    documentName2Props: documentName2Data,
};

const logo4Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const consultarDocumentos1Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    cargaMasiva: "Carga masiva",
    fechaInicio: "Fecha Inicio",
    fechaFin: "Fecha Fin",
    navbarLinkNumber: "212",
    navbarLinkF56382: "F-56382",
    navbarLinkEmpresaX: "Empresa X",
    navbarLinkDate1: "01/03/23",
    navbarLinkDate2: "01/03/23",
    navbarLinkPrice1: "₡ 120,000.00",
    navbarLinkPrice2: "₡ 120,000.00",
    logoProps: logo4Data,
};

const logo5Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea3Data = {
    className: "upload-file-area-1",
};

const container1Data = {
    uploadFileAreaProps: uploadFileArea3Data,
};

const leerDocumento2Data = {
    logoProps: logo5Data,
    containerProps: container1Data,
};

const logo6Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea22Data = {
    uploadIcon: "/img/upload-icon-4@2x.png",
};

const documentName3Data = {
    children: "../root/documents/carpeta-origen",
    className: "document-name-2",
};

const documentName4Data = {
    children: "../root/documents/carpeta-destino",
    className: "document-name-3",
};

const cargaMasiva2Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    consultarDocumentos: "Consultar documentos",
    label: "CARGAR",
    logoProps: logo6Data,
    uploadFileArea2Props: uploadFileArea22Data,
    documentName1Props: documentName3Data,
    documentName2Props: documentName4Data,
};

const logo7Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const leerDocumento4Data = {
    logoProps: logo7Data,
};

const dateComponentSet1Data = {
    children: "1",
};

const dateComponentSet21Data = {
    children: "22",
    className: "component-3-1",
};

const dateComponentSet22Data = {
    children: "3",
};

const dateComponentSet23Data = {
    children: "4",
};

const dateComponentSet3Data = {
    children: "5",
};

const dateComponentSet4Data = {
    children: "6",
};

const dateComponentSet5Data = {
    children: "7",
};

const dateComponentSet6Data = {
    children: "8",
};

const dateComponentSet7Data = {
    children: "9",
};

const dateComponentSet8Data = {
    children: "10",
    className: "component-4",
};

const dateComponentSet9Data = {
    children: "11",
    className: "component-5",
};

const dateComponentSet10Data = {
    children: "12",
    className: "component-6-1",
};

const dateComponentSet11Data = {
    children: "13",
    className: "component-7",
};

const dateComponentSet12Data = {
    children: "14",
    className: "component-8",
};

const dateComponentSet13Data = {
    children: "15",
    className: "date-component-set-1",
};

const dateComponentSet14Data = {
    children: "16",
    className: "component-3",
};

const dateComponentSet15Data = {
    children: "17",
    className: "component-4-1",
};

const dateComponentSet16Data = {
    children: "18",
    className: "component-5-1",
};

const dateComponentSet17Data = {
    children: "19",
    className: "component-6-2",
};

const dateComponentSet18Data = {
    children: "20",
    className: "component-7-1",
};

const dateComponentSet19Data = {
    children: "21",
    className: "component-8-1",
};

const frame131Data = {
    dateComponentSet1Props: dateComponentSet13Data,
    dateComponentSet2Props: dateComponentSet14Data,
    dateComponentSet3Props: dateComponentSet15Data,
    dateComponentSet4Props: dateComponentSet16Data,
    dateComponentSet5Props: dateComponentSet17Data,
    dateComponentSet6Props: dateComponentSet18Data,
    dateComponentSet7Props: dateComponentSet19Data,
};

const dateComponentSet20Data = {
    children: "22",
    className: "date-component-set-2",
};

const dateComponentSet24Data = {
    children: "23",
    className: "component-4-2",
};

const dateComponentSet25Data = {
    children: "24",
    className: "component-5-2",
};

const dateComponentSet26Data = {
    children: "25",
    className: "component-6-3",
};

const dateComponentSet27Data = {
    children: "26",
    className: "component-7-2",
};

const dateComponentSet28Data = {
    children: "27",
    className: "component-8-2",
};

const frame132Data = {
    dateComponentSet1Props: dateComponentSet20Data,
    dateComponentSet2Props: dateComponentSet21Data,
    dateComponentSet3Props: dateComponentSet24Data,
    dateComponentSet4Props: dateComponentSet25Data,
    dateComponentSet5Props: dateComponentSet26Data,
    dateComponentSet6Props: dateComponentSet27Data,
    dateComponentSet7Props: dateComponentSet28Data,
};

const dateComponentSet29Data = {
    children: "28",
    className: "date-component-set-3",
};

const dateComponentSet30Data = {
    children: "29",
    className: "component-3-2",
};

const dateComponentSet31Data = {
    children: "30",
    className: "component-4-3",
};

const dateComponentSet32Data = {
    children: "31",
    className: "component-5-3",
};

const cargaMasiva3Data = {
    title: "Enero",
    arrowLeft: "/img/arrow-left.png",
    navbarLinkPrice1: "L",
    navbarLinkM1: "M",
    navbarLinkM2: "M",
    navbarLinkJ: "J",
    navbarLinkV: "V",
    navbarLinkPrice2: "S",
    navbarLinkD: "D",
    label: "OK",
    dateComponentSet1Props: dateComponentSet1Data,
    dateComponentSet21Props: dateComponentSet21Data,
    dateComponentSet22Props: dateComponentSet22Data,
    dateComponentSet23Props: dateComponentSet23Data,
    dateComponentSet2Props: dateComponentSet3Data,
    dateComponentSet3Props: dateComponentSet4Data,
    dateComponentSet4Props: dateComponentSet5Data,
    dateComponentSet5Props: dateComponentSet6Data,
    dateComponentSet6Props: dateComponentSet7Data,
    dateComponentSet7Props: dateComponentSet8Data,
    dateComponentSet8Props: dateComponentSet9Data,
    dateComponentSet9Props: dateComponentSet10Data,
    dateComponentSet10Props: dateComponentSet11Data,
    dateComponentSet11Props: dateComponentSet12Data,
    frame131Props: frame131Data,
    frame132Props: frame132Data,
    dateComponentSet12Props: dateComponentSet29Data,
    dateComponentSet13Props: dateComponentSet30Data,
    dateComponentSet14Props: dateComponentSet31Data,
    dateComponentSet15Props: dateComponentSet32Data,
};

const logo8Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const groupEmisor1Data = {
    spanText1: "Nombre del emisor: ",
    spanText2: "1234",
    spanText3: "Id: ",
    spanText4: "1234",
};

const groupEmisor2Data = {
    spanText1: "Fecha de emisión: ",
    spanText2: "01/03/23",
    spanText3: "Fecha de vencimiento: ",
    spanText4: "01/03/23",
};

const groupEmisor3Data = {
    spanText1: "País emisor: ",
    spanText2: "Costa Rica",
    spanText3: "Dirección emisor: ",
    spanText4: "San José, Costa Rica",
};

const groupEmisor4Data = {
    spanText1: "Número de teléfono: ",
    spanText2: "(506) 86745676",
    spanText3: "Email: ",
    spanText4: "company@dominio.com",
};

const groupEmisor5Data = {
    spanText1: "País del cliente: ",
    spanText2: "Costa Rica",
    spanText3: "Dirección del cliente: ",
    spanText4: "San José, Costa Rica",
};

const groupEmisor6Data = {
    spanText1: "Número de teléfono: ",
    spanText2: "(506) 86745676",
    spanText3: "Email: ",
    spanText4: "company@dominio.com",
};

const totalTable1Data = {
    subtotal: "Subtotal:",
};

const totalTable2Data = {
    subtotal: "Monto descuento:",
};

const totalTable3Data = {
    subtotal: "% IVA Básico:",
};

const totalTable4Data = {
    subtotal: "Monto IVA Básico:",
};

const totalTable5Data = {
    subtotal: "% IVA Mínimo:",
};

const totalTable6Data = {
    subtotal: "Monto IVA Mínimo:",
};

const totalTable7Data = {
    subtotal: "% Otros Impuestos:",
};

const container31Data = {
    groupEmisor1Props: groupEmisor1Data,
    groupEmisor2Props: groupEmisor2Data,
    groupEmisor3Props: groupEmisor3Data,
    groupEmisor4Props: groupEmisor4Data,
    groupEmisor5Props: groupEmisor5Data,
    groupEmisor6Props: groupEmisor6Data,
    totalTable1Props: totalTable1Data,
    totalTable2Props: totalTable2Data,
    totalTable3Props: totalTable3Data,
    totalTable4Props: totalTable4Data,
    totalTable5Props: totalTable5Data,
    totalTable6Props: totalTable6Data,
    totalTable7Props: totalTable7Data,
};

const consultarDocumentos2Data = {
    logoProps: logo8Data,
    container3Props: container31Data,
};

const logo9Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const leerDocumento3Data = {
    salir: "Salir",
    cargaMasiva: "Carga masiva",
    consultarDocumentos: "Consultar documentos",
    uploadIcon: "/img/upload-icon@2x.png",
    spanText1: "Arrastrar & soltar archivos o",
    spanText2: " ",
    spanText3: "Buscar en el equipo",
    formatosSoportadosDocTxtPdf: "Formatos soportados: doc, txt, pdf",
    label: "LEER DOCUMENTO",
    logoProps: logo9Data,
};

const logo10Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea23Data = {
    uploadIcon: "/img/upload-icon-4@2x.png",
};

const documentName5Data = {
    children: "Seleccione carpeta de origen",
    className: "document-name-4",
};

const documentName6Data = {
    children: "Seleccione carpeta de origen",
    className: "document-name-5",
};

const cargaMasiva32Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    consultarDocumentos: "Consultar documentos",
    logoProps: logo10Data,
    uploadFileArea2Props: uploadFileArea23Data,
    documentName1Props: documentName5Data,
    documentName2Props: documentName6Data,
};

const logo11Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const frame41Data = {
    date: "02/01/23",
};

const frame42Data = {
    date: "04/01/23",
};

const frame111Data = {
    frame41Props: frame41Data,
    frame42Props: frame42Data,
};

const consultarDocumentos4Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    cargaMasiva: "Carga masiva",
    navbarLinkNumber: "212",
    navbarLinkF56382: "F-56382",
    navbarLinkEmpresaX: "Empresa X",
    navbarLinkDate1: "01/03/23",
    navbarLinkDate2: "01/03/23",
    navbarLinkPrice1: "₡ 120,000.00",
    navbarLinkPrice2: "₡ 120,000.00",
    logoProps: logo11Data,
    frame11Props: frame111Data,
};

const logo12Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const leerDocumentoData = {
    salir: "Salir",
    cargaMasiva: "Carga masiva",
    consultarDocumentos: "Consultar documentos",
    uploadIcon: "/img/upload-icon-1@2x.png",
    spanText1: "Arrastrar & soltar archivos o",
    spanText2: " ",
    spanText3: "Buscar en el equipo",
    formatosSoportadosDocTxtPdf: "Formatos soportados: doc, txt, pdf",
    logoProps: logo12Data,
};

const logo13Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea24Data = {
    uploadIcon: "/img/upload-icon-1@2x.png",
};

const documentName7Data = {
    children: "Seleccione carpeta de origen",
};

const documentName8Data = {
    children: "Seleccione carpeta de origen",
};

const cargaMasiva5Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    consultarDocumentos: "Consultar documentos",
    logoProps: logo13Data,
    uploadFileArea2Props: uploadFileArea24Data,
    documentName1Props: documentName7Data,
    documentName2Props: documentName8Data,
};

const logo14Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea5Data = {
    className: "",
};

const container4Data = {
    uploadFileAreaProps: uploadFileArea5Data,
};

const leerDocumento7Data = {
    logoProps: logo14Data,
    containerProps: container4Data,
};

const logo15Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const consultarDocumentosData = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    cargaMasiva: "Carga masiva",
    fechaInicio: "Fecha Inicio",
    fechaFin: "Fecha Fin",
    navbarLinkNumber: "212",
    navbarLinkF56382: "F-56382",
    navbarLinkEmpresaX: "Empresa X",
    navbarLinkDate1: "01/03/23",
    navbarLinkDate2: "01/03/23",
    navbarLinkPrice1: "₡ 120,000.00",
    navbarLinkPrice2: "₡ 120,000.00",
    logoProps: logo15Data,
};

const logo16Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea25Data = {
    uploadIcon: "/img/upload-icon-4@2x.png",
};

const documentName9Data = {
    children: "../root/documents/carpeta-origen",
    className: "document-name-6",
};

const documentName10Data = {
    children: "../root/documents/carpeta-destino",
    className: "document-name-7",
};

const cargaMasiva6Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    consultarDocumentos: "Consultar documentos",
    label: "CARGAR",
    logoProps: logo16Data,
    uploadFileArea2Props: uploadFileArea25Data,
    documentName1Props: documentName9Data,
    documentName2Props: documentName10Data,
};

const logo17Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const leerDocumento8Data = {
    logoProps: logo17Data,
};

const dateComponentSet33Data = {
    children: "1",
};

const dateComponentSet210Data = {
    children: "2",
};

const dateComponentSet211Data = {
    children: "3",
};

const dateComponentSet212Data = {
    children: "4",
};

const dateComponentSet34Data = {
    children: "5",
};

const dateComponentSet35Data = {
    children: "6",
};

const dateComponentSet36Data = {
    children: "7",
};

const dateComponentSet37Data = {
    children: "8",
};

const dateComponentSet38Data = {
    children: "9",
};

const dateComponentSet39Data = {
    children: "10",
    className: "component-4-4",
};

const dateComponentSet40Data = {
    children: "11",
    className: "component-5-4",
};

const dateComponentSet41Data = {
    children: "12",
    className: "component-6-4",
};

const dateComponentSet42Data = {
    children: "13",
    className: "component-7-3",
};

const dateComponentSet43Data = {
    children: "14",
    className: "component-8-3",
};

const dateComponentSet44Data = {
    children: "15",
    className: "date-component-set-4",
};

const dateComponentSet45Data = {
    children: "16",
    className: "component-3-3",
};

const dateComponentSet46Data = {
    children: "17",
    className: "component-4-5",
};

const dateComponentSet47Data = {
    children: "18",
    className: "component-5-5",
};

const dateComponentSet48Data = {
    children: "19",
    className: "component-6-5",
};

const dateComponentSet49Data = {
    children: "20",
    className: "component-7-4",
};

const dateComponentSet50Data = {
    children: "21",
    className: "component-8-4",
};

const frame133Data = {
    dateComponentSet1Props: dateComponentSet44Data,
    dateComponentSet2Props: dateComponentSet45Data,
    dateComponentSet3Props: dateComponentSet46Data,
    dateComponentSet4Props: dateComponentSet47Data,
    dateComponentSet5Props: dateComponentSet48Data,
    dateComponentSet6Props: dateComponentSet49Data,
    dateComponentSet7Props: dateComponentSet50Data,
};

const dateComponentSet51Data = {
    children: "22",
    className: "date-component-set-5",
};

const dateComponentSet52Data = {
    children: "22",
    className: "component-3-4",
};

const dateComponentSet53Data = {
    children: "23",
    className: "component-4-6",
};

const dateComponentSet54Data = {
    children: "24",
    className: "component-5-6",
};

const dateComponentSet55Data = {
    children: "25",
    className: "component-6-6",
};

const dateComponentSet56Data = {
    children: "26",
    className: "component-7-5",
};

const dateComponentSet57Data = {
    children: "27",
    className: "component-8-5",
};

const frame134Data = {
    dateComponentSet1Props: dateComponentSet51Data,
    dateComponentSet2Props: dateComponentSet52Data,
    dateComponentSet3Props: dateComponentSet53Data,
    dateComponentSet4Props: dateComponentSet54Data,
    dateComponentSet5Props: dateComponentSet55Data,
    dateComponentSet6Props: dateComponentSet56Data,
    dateComponentSet7Props: dateComponentSet57Data,
};

const dateComponentSet58Data = {
    children: "28",
    className: "date-component-set-6",
};

const dateComponentSet59Data = {
    children: "29",
    className: "component-3-5",
};

const dateComponentSet60Data = {
    children: "30",
    className: "component-4-7",
};

const dateComponentSet61Data = {
    children: "31",
    className: "component-5-7",
};

const cargaMasiva7Data = {
    title: "Enero",
    arrowLeft: "/img/arrow-left.png",
    navbarLinkPrice1: "L",
    navbarLinkM1: "M",
    navbarLinkM2: "M",
    navbarLinkJ: "J",
    navbarLinkV: "V",
    navbarLinkPrice2: "S",
    navbarLinkD: "D",
    label: "OK",
    dateComponentSet1Props: dateComponentSet33Data,
    dateComponentSet21Props: dateComponentSet210Data,
    dateComponentSet22Props: dateComponentSet211Data,
    dateComponentSet23Props: dateComponentSet212Data,
    dateComponentSet2Props: dateComponentSet34Data,
    dateComponentSet3Props: dateComponentSet35Data,
    dateComponentSet4Props: dateComponentSet36Data,
    dateComponentSet5Props: dateComponentSet37Data,
    dateComponentSet6Props: dateComponentSet38Data,
    dateComponentSet7Props: dateComponentSet39Data,
    dateComponentSet8Props: dateComponentSet40Data,
    dateComponentSet9Props: dateComponentSet41Data,
    dateComponentSet10Props: dateComponentSet42Data,
    dateComponentSet11Props: dateComponentSet43Data,
    frame131Props: frame133Data,
    frame132Props: frame134Data,
    dateComponentSet12Props: dateComponentSet58Data,
    dateComponentSet13Props: dateComponentSet59Data,
    dateComponentSet14Props: dateComponentSet60Data,
    dateComponentSet15Props: dateComponentSet61Data,
};

const logo18Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const groupEmisor7Data = {
    spanText1: "Nombre del emisor: ",
    spanText2: "1234",
    spanText3: "Id: ",
    spanText4: "1234",
};

const groupEmisor8Data = {
    spanText1: "Fecha de emisión: ",
    spanText2: "01/03/23",
    spanText3: "Fecha de vencimiento: ",
    spanText4: "01/03/23",
};

const groupEmisor9Data = {
    spanText1: "País emisor: ",
    spanText2: "Costa Rica",
    spanText3: "Dirección emisor: ",
    spanText4: "San José, Costa Rica",
};

const groupEmisor10Data = {
    spanText1: "Número de teléfono: ",
    spanText2: "(506) 86745676",
    spanText3: "Email: ",
    spanText4: "company@dominio.com",
};

const groupEmisor11Data = {
    spanText1: "País del cliente: ",
    spanText2: "Costa Rica",
    spanText3: "Dirección del cliente: ",
    spanText4: "San José, Costa Rica",
};

const groupEmisor12Data = {
    spanText1: "Número de teléfono: ",
    spanText2: "(506) 86745676",
    spanText3: "Email: ",
    spanText4: "company@dominio.com",
};

const totalTable8Data = {
    subtotal: "Subtotal:",
};

const totalTable9Data = {
    subtotal: "Monto descuento:",
};

const totalTable10Data = {
    subtotal: "% IVA Básico:",
};

const totalTable11Data = {
    subtotal: "Monto IVA Básico:",
};

const totalTable12Data = {
    subtotal: "% IVA Mínimo:",
};

const totalTable13Data = {
    subtotal: "Monto IVA Mínimo:",
};

const totalTable14Data = {
    subtotal: "% Otros Impuestos:",
};

const container32Data = {
    groupEmisor1Props: groupEmisor7Data,
    groupEmisor2Props: groupEmisor8Data,
    groupEmisor3Props: groupEmisor9Data,
    groupEmisor4Props: groupEmisor10Data,
    groupEmisor5Props: groupEmisor11Data,
    groupEmisor6Props: groupEmisor12Data,
    totalTable1Props: totalTable8Data,
    totalTable2Props: totalTable9Data,
    totalTable3Props: totalTable10Data,
    totalTable4Props: totalTable11Data,
    totalTable5Props: totalTable12Data,
    totalTable6Props: totalTable13Data,
    totalTable7Props: totalTable14Data,
};

const consultarDocumentos3Data = {
    logoProps: logo18Data,
    container3Props: container32Data,
};

const logo19Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const uploadFileArea26Data = {
    uploadIcon: "/img/upload-icon-4@2x.png",
};

const documentName11Data = {
    children: "Seleccione carpeta de origen",
    className: "document-name-8",
};

const documentName12Data = {
    children: "Seleccione carpeta de origen",
    className: "document-name-9",
};

const cargaMasiva8Data = {
    salir: "Salir",
    leerDocumento: "Leer documento",
    consultarDocumentos: "Consultar documentos",
    logoProps: logo19Data,
    uploadFileArea2Props: uploadFileArea26Data,
    documentName1Props: documentName11Data,
    documentName2Props: documentName12Data,
};

const logo20Data = {
    logo_Vector: "/img/logo-vector@2x.png",
};

const leerDocumento9Data = {
    salir: "Salir",
    cargaMasiva: "Carga masiva",
    consultarDocumentos: "Consultar documentos",
    uploadIcon: "/img/upload-icon@2x.png",
    spanText1: "Arrastrar & soltar archivos o",
    spanText2: " ",
    spanText3: "Buscar en el equipo",
    formatosSoportadosDocTxtPdf: "Formatos soportados: doc, txt, pdf",
    label: "LEER DOCUMENTO",
    logoProps: logo20Data,
};

const logo21Data = {
    logo_Vector: "",
};

const frame43Data = {
    date: "02/01/23",
};

const frame44Data = {
    date: "04/01/23",
};

const frame112Data = {
    frame41Props: frame43Data,
    frame42Props: frame44Data,
};

const consultarDocumentos5Data = {
    salir: "Salir",
    logOut: "",
    leerDocumento: "Leer documento",
    cargaMasiva: "Carga masiva",
    navbarLinkNumber: "212",
    navbarLinkF56382: "F-56382",
    navbarLinkEmpresaX: "Empresa X",
    navbarLinkDate1: "01/03/23",
    navbarLinkDate2: "01/03/23",
    navbarLinkPrice1: "₡ 120,000.00",
    navbarLinkPrice2: "₡ 120,000.00",
    logoProps: logo21Data,
    frame11Props: frame112Data,
};

const loginData = {
    searchHeader8001F49142870A5C1428Edf: "/img/search-header-800-1f49142870a5c1428edf0f570465ce9114ca4dc76f9d64.png",
    contenedor_Bg: "/img/contenedor-bg.png",
    title: ".Project",
    spanText1: <React.Fragment>Inicie sesión con su cuenta <br /></React.Fragment>,
    spanText2: "AI.project",
    usuario: "Usuario",
    inputType1: "text",
    inputPlaceholder1: "Ingrese su usuario",
    contrasea: "Contraseña",
    inputType2: "password",
    inputPlaceholder2: "Ingrese su contraseña",
    ingresar: "INGRESAR",
};

