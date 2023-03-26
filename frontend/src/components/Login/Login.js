import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const ItemLeft = styled(Box)(({ theme }) => ({
    //background: "url(/images/Log_img.png) no-repeat center center fixed",
    minHeight: "375px",
    minWidth: "100px",
    //backgroundSize: "cover",
  }));
  return (
    <div className="Home">
      <div className="lander">
        {/*  <h1>Login</h1>
        <p>A simple note taking app</p> */}
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <ItemLeft>
              <img src="/images/Log_img.png" alt="Logo" />
            </ItemLeft>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <h1>Inicie sesión con su cuenta AI.project </h1>
              <h2>Username </h2>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <h2>Password </h2>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <br />
              <br />
              <br />
              <Button variant="outlined">Ingresar</Button>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
