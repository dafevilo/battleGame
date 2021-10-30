import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCastle } from "./actions/castle.js";

import {
  Container,
  AppBar,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import SportsKabaddiSharpIcon from "@mui/icons-material/SportsKabaddiSharp";

import useStyles from "./styles.js";

import Castle from "./components/Castle/Castle";

const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const castles = useSelector((state) => state.castle);

  useEffect(() => {
    dispatch(getCastle());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <AppBar
        className={classes.appBar}
        position="static"
        elevation={3}
        color="inherit"
      >
        <div className={classes.content}>
          <SportsKabaddiSharpIcon
            className={classes.icon}
            color="primary"
            sx={{ fontSize: 60 }}
          />
          <Typography variant="h3" color="primary">
            Battle Game
          </Typography>
          <SportsKabaddiSharpIcon
            className={classes.icon}
            color="primary"
            sx={{ fontSize: 60 }}
          />
        </div>
      </AppBar>
      {!castles.length ? (
        <CircularProgress />
      ) : (
        castles.map((castle) => (
          <Grid container>
            <Castle key={castle._id} castle={castle} troops={castle.troops} />
          </Grid>
        ))
      )}
    </Container>
  );
};

export default App;
