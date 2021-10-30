import mongoose from "mongoose";
import Castle from "../models/castleModel.js";
import generateTroops from "../troopGenerator/troops.js";

export const getCastles = async (req, res) => {
  try {
    const castles = await Castle.find();

    res.status(200).json(castles);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createCastle = async (req, res) => {
  const castle = req.body;

  const newCastle = new Castle(castle);

  try {
    await newCastle.save();
    res.status(200).json(newCastle);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createTroop = async (req, res) => {
  const { id } = req.params;

  let { num } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no castle with that id");

  try {
    let troops = await generateTroops(num);

    const castle = await Castle.findById(id);

    await castle.troops.push(troops);

    await castle.save();

    res.status(201).json(castle);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deleteTroop = async (req, res) => {
  const { id, troop } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no castle with that id");

  try {
    const castle = await Castle.findById(id);
    await castle.troops.id(troop).remove();
    await castle.save();

    const castles = await Castle.find();

    res.status(201).json(castles);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
