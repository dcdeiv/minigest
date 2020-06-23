import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles((theme) => ({
  box: {
    textAlign: "center",
  },
}));

const ListaVuota = (props) => {
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
};

ListaVuota.propTypes = {
  happy: PropTypes.bool,
  message: PropTypes.string,
};

export default ListaVuota;
