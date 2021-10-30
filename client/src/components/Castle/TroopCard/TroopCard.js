import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";
import { deleteTroop } from "../../../actions/castle.js";

import useStyles from "./styles.js";

import troopsImg from "../../../images/troops.jpg";

const TroopCard = ({ troop, castle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card} elevation={5}>
      <CardMedia className={classes.media} image={troopsImg} />
      <CardContent>
        <div className={classes.title}>
          <Typography variant="h4">Troops</Typography>
          <Button onClick={() => dispatch(deleteTroop(castle._id, troop._id))}>
            {" "}
            <DeleteIcon />{" "}
          </Button>
        </div>
        <Typography align="center" variant="h6">
          {" "}
          Spearsmen: {troop.spearsmen}{" "}
        </Typography>
        <Typography align="center" variant="h6">
          {" "}
          Swordmen: {troop.swordsmen}{" "}
        </Typography>
        <Typography align="center" variant="h6">
          {" "}
          Archers: {troop.archers}{" "}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TroopCard;
