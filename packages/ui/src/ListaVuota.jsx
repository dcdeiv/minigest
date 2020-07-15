import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  box: {
    textAlign: "center",
  },
}));

export default function ListaVuota(props) {
  const { happy = false, message = "Qui non c'è niente!" } = props;
  const classes = useStyles();

  const Icon = (props) =>
    happy ? (
      <SentimentVerySatisfiedIcon {...props} />
    ) : (
      <SentimentVeryDissatisfiedIcon {...props} />
    );

  return (
    <Box p={2} className={classes.box}>
      <Box mb={1}>
        <Icon fontSize="large" />
      </Box>

      <Typography variant="h6" component="h6">
        {message}
      </Typography>
    </Box>
  );
}
