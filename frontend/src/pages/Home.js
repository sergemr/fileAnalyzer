import React from "react";
import Upload from "../components/Upload/Upload";
import UploadFileArea from "../components/UploadFileArea";

function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <Upload />
        <UploadFileArea></UploadFileArea>
      </div>
    </div>
  );
}

export default Home;
