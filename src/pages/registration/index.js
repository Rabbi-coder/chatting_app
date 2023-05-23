import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Signup from "../../svg/signup";
import Forms from "./form";

const Registration = () => {
  return (
    <>
      <div className="registration">
        <Container fixed>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={5}>
              <Forms />
            </Grid>
            <Grid item xs={6}>
              <Signup />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Registration;
