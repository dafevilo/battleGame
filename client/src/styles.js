import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    marginBottom: "20px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    margin: "0 15px 0 10px ",
  },
}));
