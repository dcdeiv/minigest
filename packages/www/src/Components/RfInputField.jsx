import React from "react";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Box,
} from "@material-ui/core";
import { MessageBox } from "@minigest/ui";
import { action } from "src/state";

export default function RfInputField(props) {
  let { options, handleChange } = props;
  const dispatch = useDispatch();
  let { regimeFiscale: rf } = useSelector((state) => state.fisco);

  // Aggiorna la lista degli interessi legali
  React.useEffect(() => {
    dispatch(action.regimeFiscale.get());
  }, [dispatch]);

  if (rf.getting) {
    return (
      <Box style={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    if (rf.getError) {
      return (
        <MessageBox>
          Errore! Impossibile recuperare la lista dei regimi fiscali
        </MessageBox>
      );
    } else {
      if (isEmpty(rf.results)) {
        return (
          <MessageBox variant="warning">
            Non sono stati aggiunti regimi fiscali
          </MessageBox>
        );
      } else {
        return (
          <FormControl
            fullWidth
            variant="outlined"
            error={options.error || false}
          >
            <InputLabel id="regime-fiscale-label">Regime Fiscale</InputLabel>
            <Select
              labelId="regime-fiscale-label"
              id="regime-fiscale"
              onChange={handleChange}
              label="Regime Fiscale"
              value={options.value}
              name={options.name || "regime_fiscale"}
            >
              <MenuItem value="">Non selezionato</MenuItem>
              {rf.results.map((o, i) => {
                return (
                  <MenuItem key={i} value={o.id}>
                    {o.codice} - {o.descrizione}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        );
      }
    }
  }
}
