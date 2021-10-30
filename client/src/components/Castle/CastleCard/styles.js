import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "20px",
    height: "100%",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "10px",
  },
}));
