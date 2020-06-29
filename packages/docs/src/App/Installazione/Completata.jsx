import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Card, CardHeader, CardActions, Button } from "@material-ui/core";

export function Completata(props) {
  const history = useHistory();

  return (
    <Box mt={4} mb={4}>
      <Card>
        <CardHeader
          title="Installazione completata?"
          subheader="Scopri come utilizzare minigest!"
        />
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push("/utilizzo")}
          >
            continua
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
