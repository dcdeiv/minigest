import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
  },
}));

export function Image({ src, alt = "immagine", ...rest }) {
  const classes = useStyles();

  return (
    <Box>
      <img src={src} alt={alt} className={classes.image} />
    </Box>
  );
}
