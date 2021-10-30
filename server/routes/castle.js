import express from "express";

import {
  getCastles,
  createCastle,
  createTroop,
  deleteTroop,
} from "../controllers/castleControllers.js";

const router = express.Router();

router.get("/", getCastles);
router.post("/", createCastle);
router.post("/:id", createTroop);
router.delete("/:id/:troop", deleteTroop);

export default router;
