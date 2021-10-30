import React, { useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import useStyles from "./styles.js";

import { useDispatch } from "react-redux";
import { createTroop } from "../../../actions/castle.js";

import franceFlag from "../../../images/france.png";

const CastleCard = ({ castle }) => {
  const [troops, setTroops] = useState({
    num: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    await e.preventDefault();

    await dispatch(createTroop(castle._id, { num: troops.num }));

    await clear();
  };

  const clear = () => {
    setTroops({ num: "" });
  };

  return (
    <Card className={classes.card} elevation={5}>
      <CardMedia className={classes.media} image={franceFlag} />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {" "}
          France´s Kingdom{" "}
        </Typography>
      </CardContent>
      <form
        className={classes.form}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          name="troops"
          variant="outlined"
          label="troops"
          fullWidth
          value={troops.num}
          onChange={(e) => setTroops({ troops, num: e.target.value })}
        />
        <Button
          className={classes.button}
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Generate
        </Button>
      </form>
    </Card>
  );
};

export default CastleCard;
