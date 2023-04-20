import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function Login() {
  const onSubmit = async (e) => {
    let formData = new FormData();
    e.preventDefault();
    console.log(e);
    //console.log(e.target[0]);
    formData.append("file", e.target[0].files[0]);
    /*
    const response = await fetch("/upload", {
      method: "POST",
      body: e.target[0],
    });
    */
    axios.post("http://127.0.0.1:5001/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // const jsonData = await response.json();
    // console.log(jsonData);
  };
  return (
    <div className="Home">
      <div className="lander">
        {/*  <h1>Login</h1>
        <p>A simple note taking app</p> */}
        <form
          //action="/upload"
          onSubmit={onSubmit}
          //method="post"
          enctype="multipart/form-data"
        >
          <label for="file">Select a file:</label>
          <input type="file" id="file" name="file" />
          <br />
          <br />
          <input type="submit" value="Upload" />
        </form>
      </div>
    </div>
  );
}

export default Login;
