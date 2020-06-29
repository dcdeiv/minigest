import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Card, CardHeader, CardActions, Button } from "@material-ui/core";

export function Utilizzo(props) {
  const history = useHistory();

  return (
    <Box mt={3} mb={4}>
      <Card>
        <CardHeader
          title="Guida all'utilizzo"
          subheader="Scopri come utilizzare minigest!"
        />
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/utilizzo")}
          >
            continua
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
