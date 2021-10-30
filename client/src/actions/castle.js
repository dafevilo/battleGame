import * as api from "../api/index.js";

import {
  FETCH_ALL,
  DELETE_TROOP,
  CREATE_TROOP,
} from "../Constants/actionTypes.js";

export const getCastle = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCastles();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTroop = (id, num) => async (dispatch) => {
  try {
    const { data } = await api.createTroop(id, num);

    dispatch({ type: CREATE_TROOP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTroop = (id, troop) => async (dispatch) => {
  try {
    const { data } = await api.deleteTroop(id, troop);

    dispatch({ type: DELETE_TROOP, payload: data });
  } catch (error) {
    console.log(error);
  }
};
