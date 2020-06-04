import React from "react";
import { isEmpty } from "lodash";
import { Percentuale, LoadingSpinner, ListaVuota } from "~/Components";
import {
  TableContainer,
  Paper,
  Box,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export function Lista(props) {
  const { subject, results, getting, search, searchValue, onSearch } = props;
  const [value, setValue] = React.useState(searchValue);

  const updateSearch = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = () => {
    onSearch(value);
  };

  const descrizione = {
    O: "Ordinaria",
    R: "Ridotta",
    M: "Minima",
    E: "Esente",
  };

  const Header = () => {
    if (search) {
      return (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={5}>
            <Typography variant="h6" component="h2">
              {subject}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            item
            xs={12}
            md={4}
          >
            <Grid item xs={9}>
              <TextField
                autoFocus
                id="search"
                name="search"
                label="Periodo"
                variant="outlined"
                value={value}
                onChange={updateSearch}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={2} style={{ textAlign: "center" }}>
              <IconButton onClick={handleSubmit}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Typography variant="h6" component="h2">
          {subject}
        </Typography>
      );
    }
  };

  return getting ? (
    <LoadingSpinner />
  ) : isEmpty(results) ? (
    <ListaVuota message={`Non ci sono ${subject.toLowerCase()}`} />
  ) : (
    <Paper>
      <Box p={2}>
        <Header />
      </Box>

      <TableContainer component={Paper} style={{ maxHeight: 321 }}>
        <Table aria-label="aliquote iva">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Descrizione</TableCell>
              <TableCell align="right">Aliquota</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {results.map((aliquota) => (
              <TableRow key={aliquota.id}>
                <TableCell>{aliquota.data}</TableCell>
                <TableCell>{descrizione[aliquota.descrizione]}</TableCell>
                <TableCell align="right">
                  <Percentuale value={parseFloat(aliquota.aliquota)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
