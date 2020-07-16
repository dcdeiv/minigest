import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@material-ui/core";
import {
  Table,
  LoadingSpinner,
  MessageBox,
  ListaVuota,
  Percentuale,
} from "@minigest/ui";
import { action } from "src/state";
import { tipiAliquote } from "../tipi";
import SearchIcon from "@material-ui/icons/Search";
import { CercaAliquoteCorrenti } from "./Cerca";

const useStyles = makeStyles({
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    paddingTop: 0,
  },
});

export function IvaAliquoteCorrenti() {
  const dispatch = useDispatch();
  const classes = useStyles();
  let { aliquoteQ } = useSelector((state) => state.iva);

  React.useEffect(() => {
    dispatch(action.ivaAliquote.getQ());
  }, [dispatch]);

  // Dialog cerca
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (data) => {
    dispatch(action.ivaAliquote.getQ(data));
  };

  if (aliquoteQ.getting) {
    return <LoadingSpinner />;
  } else {
    if (aliquoteQ.getError) {
      return <MessageBox>{aliquoteQ.getError}</MessageBox>;
    } else {
      if (isEmpty(aliquoteQ.results)) {
        return <ListaVuota />;
      } else {
        return (
          <React.Fragment>
            <CercaAliquoteCorrenti
              open={open}
              onClose={() => setOpen(false)}
              onSubmit={handleSubmit}
            />
            <Card>
              <CardHeader
                className={classes.cardHeader}
                title="Aliquote in vigore"
                action={
                  <IconButton onClick={() => setOpen(true)}>
                    <SearchIcon />
                  </IconButton>
                }
              />
              <CardContent className={classes.cardContent}>
                <Table table={{ size: "small" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ width: 150 }}>Data</TableCell>
                      <TableCell style={{ width: 150 }}>Aliquota</TableCell>
                      <TableCell>Descrizione</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {aliquoteQ.results.map((o, i) => {
                      return (
                        <TableRow key={i}>
                          <TableCell>{o.data}</TableCell>
                          <TableCell>
                            <Percentuale value={o.aliquota} />
                          </TableCell>
                          <TableCell>{tipiAliquote[o.descrizione]}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </React.Fragment>
        );
      }
    }
  }
}
