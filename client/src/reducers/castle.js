import {
  FETCH_ALL,
  DELETE_TROOP,
  CREATE_TROOP,
} from "../Constants/actionTypes.js";

export default (castle = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return (castle = action.payload);
    case CREATE_TROOP:
      return castle.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    case DELETE_TROOP:
      return (castle = action.payload);
    default:
      return castle;
  }
};