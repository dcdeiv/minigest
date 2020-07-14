import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardActions,
  Button,
} from "@material-ui/core";
import WidgetsIcon from "@material-ui/icons/Widgets";
import DiscFullIcon from "@material-ui/icons/DiscFull";

export function SetUpWidget({ boxProps, ...rest }) {
  const history = useHistory();

  return (
    <Box {...boxProps}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader
              avatar={<WidgetsIcon />}
              title="PyPi"
              subheader="guida all'installazione di minigest attraverso PyPi"
            />
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/installazione/pypi")}
              >
                continua
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader
              avatar={<DiscFullIcon />}
              title="Docker"
              subheader="guida all'installazione di minigest attraverso Docker"
            />
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/installazione/docker")}
              >
                continua
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
