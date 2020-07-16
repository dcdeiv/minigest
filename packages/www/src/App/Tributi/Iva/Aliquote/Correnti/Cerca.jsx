import React from "react";
import moment from "moment";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

export function CercaAliquoteCorrenti(props) {
  let { open, onClose, onSubmit } = props;

  const [data, setData] = React.useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const handleChange = (e) => {
    let { value } = e.target;
    setData(value);
  };

  const handleSubmit = () => {
    onSubmit(data);
    onClose();
  };

  const preventSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent>
        <form noValidate onSubmit={preventSubmit}>
          <TextField
            id="cerca-aliquote-correnti"
            name="aliquote-correnti"
            value={data}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <Typography variant="body2">
            Cerca per data! Il formato della data deve essere AAAA-MM-DD. Puoi
            cercare anche solo per anno: AAAA; mese: AAAA-MM; o per giorno
            AAAA-MM-DD
          </Typography>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          annulla
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="secondary">
          Cerca
        </Button>
      </DialogActions>
    </Dialog>
  );
}
