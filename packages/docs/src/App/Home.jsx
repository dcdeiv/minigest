import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
  CardActions,
  Button,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppHeader } from "src/Components";
import WidgetsIcon from "@material-ui/icons/Widgets";
import DiscFullIcon from "@material-ui/icons/DiscFull";

export function Home(props) {
  const history = useHistory();

  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="h1" gutterBottom>
          minigest
        </Typography>
        <Typography>
          Minigest è un'applicazione scritta in python per il framework django,
          completamente gratuita e distribuita con la licenza MIT. È rivolta a
          tutte le piccole aziende che hanno bisogno di un programma che
          permetta loro di visualizzare immediamente la loro situazione
          contabile, di tenere traccia dei pagamenti, degli acquisti, delle
          vendite e delle tasse e imposte da pagare.
        </Typography>
      </AppHeader>

      <Box mb={3}>
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

      <Divider />
    </React.Fragment>
  );
}
