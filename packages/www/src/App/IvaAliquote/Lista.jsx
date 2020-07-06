import React from "react";
import { isEmpty } from "lodash";
import {
  Percentuale,
  LoadingSpinner,
  ListaVuota,
  TableCellIcon,
} from "src/Components";
import { makeStyles } from "@material-ui/styles";
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
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { orange, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  editButton: {
    color: orange[500],
    "&:hover": {
      color: orange[700],
    },
  },
  deleteButton: {
    color: red[500],
    "&:hover": {
      color: red[700],
    },
  },
}));

export function Lista(props) {
  const classes = useStyles();
  const {
    subject,
    results,
    getting,
    getError,
    search,
    searchValue,
    onSearch,
    options,
    editable,
    onEdit,
    onDelete,
  } = props;
  const [value, setValue] = React.useState({
    value: searchValue,
    error: false,
  });

  const updateSearch = (e) => {
    const { value } = e.target;
    let error = true;

    // Controlla che il valore contenga solo numeri [0-9] o -
    const regex = new RegExp(/^[-0-9]{4,10}$/gm);

    if (regex.test(value)) {
      // Se i caratteri sono giusti
      // Controlla la lunghezza della stringa
      switch (value.length) {
        case 4:
          // AAAA
          error = false;
          break;
        case 7:
          // AAAA-MM
          error = false;
          break;
        case 10:
          // AAAA-MM-DD
          error = false;
          break;
        default:
          error = true;
          break;
      }
    }

    setValue({ ...value, value: value, error: error });
  };

  const handleSubmit = () => {
    onSearch(value.value);
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
            md={5}
          >
            <Grid item xs={9}>
              <TextField
                id="search"
                name="search"
                label="Periodo"
                variant="outlined"
                value={value.value}
                error={value.error}
                onChange={updateSearch}
                size="small"
                fullWidth
                helperText="formato AAAA-MM-GG"
              />
            </Grid>
            <Grid item xs={2} style={{ textAlign: "center" }}>
              <IconButton onClick={handleSubmit} disabled={value.error}>
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
    <ListaVuota message={getError || `Non ci sono ${subject.toLowerCase()}`} />
  ) : (
    <Paper>
      <Box p={2}>
        <Header />
      </Box>

      {getError && (
        <Box p={2}>
          <Typography gutterBottom color="error">
            {getError}
          </Typography>
        </Box>
      )}

      <TableContainer component={Paper} style={{ maxHeight: 321 }}>
        <Table aria-label="aliquote iva">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Descrizione</TableCell>
              <TableCell align="right">Aliquota</TableCell>
              {editable && (
                <React.Fragment>
                  <TableCellIcon>
                    <EditIcon />
                  </TableCellIcon>
                  <TableCellIcon>
                    <DeleteForeverIcon />
                  </TableCellIcon>
                </React.Fragment>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {results.map((aliquota) => (
              <TableRow key={aliquota.id}>
                <TableCell>{aliquota.data}</TableCell>
                <TableCell>{options[aliquota.descrizione]}</TableCell>
                <TableCell align="right">
                  <Percentuale value={parseFloat(aliquota.aliquota)} />
                </TableCell>
                {editable && (
                  <React.Fragment>
                    <TableCellIcon>
                      <IconButton
                        className={classes.editButton}
                        onClick={() => onEdit(aliquota)}
                      >
                        <EditIcon color="inherit" />
                      </IconButton>
                    </TableCellIcon>
                    <TableCellIcon>
                      <IconButton
                        className={classes.deleteButton}
                        onClick={() => onDelete(aliquota.id)}
                      >
                        <DeleteForeverIcon color="inherit" />
                      </IconButton>
                    </TableCellIcon>
                  </React.Fragment>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
