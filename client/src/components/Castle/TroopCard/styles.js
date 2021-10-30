import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));
