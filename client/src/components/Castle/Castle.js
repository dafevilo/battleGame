import React from "react";

import { Grid, Grow, CircularProgress } from "@mui/material";

import CastleCard from "./CastleCard/CastleCard.js";
import TroopCard from "./TroopCard/TroopCard.js";

const Castle = ({ castle, troops }) => {
  return (
    <Grid container flexDirection="row" spacing={5}>
      <Grid item xs={12} sm={12} md={4} lg={3}>
        <div>
          <CastleCard castle={castle} />
        </div>
      </Grid>
      <Grid
        item
        container
        align="center"
        alignItems="stretch"
        xs={12}
        sm={12}
        md={8}
        lg={9}
        spacing={3}
      >
        {!troops.length ? (
          <CircularProgress />
        ) : (
          troops.map((troop) => (
            <Grow in>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TroopCard key={troop._id} troop={troop} castle={castle} />
              </Grid>
            </Grow>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default Castle;
