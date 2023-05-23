import { Container, Grid } from "@mui/material";
import React from "react";
import Signin from "../../svg/login";
import "./style.css";
import SigninForm from "../signin/signinform";
const Login = () => {
  return (
    <>
      <div className="login">
        <Container fixed>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <Signin />
            </Grid>
            <Grid item xs={5}>
              <SigninForm />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Login;
