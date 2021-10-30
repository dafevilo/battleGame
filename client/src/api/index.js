import axios from "axios";

const url = "https://battle-game-test.herokuapp.com/castle";

export const fetchCastles = () => axios.get(url);
export const createTroop = (id, num) => axios.post(`${url}/${id}`, num);
export const deleteTroop = (id, troop) => axios.delete(`${url}/${id}/${troop}`);
