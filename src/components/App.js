import React, { useState, useEffect } from "react";
import "./App.css"

import { makeStyles } from "@material-ui/core/styles";
import {
  Route,
  Switch,
  Redirect,
  //BrowserRouter as Router,
} from "react-router-dom";
import { Grid} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline'

import Body from "./text_components/body"

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    minHeight: "100vh",   
  },
}));

function App() {
  
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Grid 
        container 
        xs={12}>
      
        <Grid
          container
          xs={2}
          direction="row"
          item
        />
        <Grid
          container
          item
          xs={8}
          direction="row"
          justify="center"
          alignItems0="center"
          className={classes.container}
        >
          <Body />
        </Grid>
        <Grid
          container
          xs={2}
          direction="row"
          item
        />

      </Grid>
    </div>
  );
}
export default App;

