import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  return (
    <div className="Home">
      <div className="lander">
        {/*  <h1>Login</h1>
        <p>A simple note taking app</p> */}
        <form action="/upload" method="post" enctype="multipart/form-data">
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
