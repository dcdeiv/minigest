import React from "react";
import moment from "moment";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  LoadingSpinner,
  MessageBox,
  ListaVuota,
  Table,
  TableCellIcon,
  Percentuale,
  FabFixed,
  ConfirmDelete,
} from "@minigest/ui";
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
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { orange, red } from "@material-ui/core/colors";
import { action } from "src/state";
import { tipiAliquote } from "../tipi";
import { Form } from "./Form";

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
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    paddingTop: 0,
  },
}));

export function ListaCompleta() {
  const dispatch = useDispatch();
  const classes = useStyles();
  let { aliquote } = useSelector((state) => state.iva);

  React.useEffect(() => {
    dispatch(action.ivaAliquote.get());
  }, [dispatch]);

  // FORM
  const defaultValues = {
    id: null,
    data: {
      required: true,
      value: new Date(),
      error: false,
    },
    descrizione: {
      required: true,
      value: "O",
      options: tipiAliquote,
      error: false,
    },
    aliquota: {
      required: true,
      value: "",
      error: true,
    },
  };

  const [open, setOpen] = React.useState(false);
  const [selectedObject, setSelectedObject] = React.useState(defaultValues);
  const [deletableObject, setDeletableObject] = React.useState(0);

  const handleReqAdd = () => {
    setSelectedObject(defaultValues);
    setOpen(true);
  };

  const handleUnset = () => {
    setOpen(false);
    setSelectedObject(defaultValues);
  };

  const handleReqEdit = (object) => {
    setSelectedObject({
      id: object.id,
      data: {
        ...defaultValues.data,
        value: moment(object.data, "YYYY-MM-DD"),
        error: false,
      },
      descrizione: {
        ...defaultValues.descrizione,
        value: object.descrizione,
        error: false,
      },
      aliquota: {
        ...defaultValues.aliquota,
        value: object.aliquota,
        error: false,
      },
    });
    setOpen(true);
  };

  const handleSubmit = (object) => {
    const objectCopy = { ...object };

    if (object.id) {
      dispatch(action.ivaAliquote.put(objectCopy));
    } else {
      delete objectCopy.id;
      dispatch(action.ivaAliquote.post(objectCopy));
    }
  };

  const handleDelete = () => {
    dispatch(action.ivaAliquote.remove(deletableObject));
    setDeletableObject(0);
  };

  if (aliquote.getting) {
    return <LoadingSpinner />;
  } else {
    if (aliquote.getError) {
      return <MessageBox>{aliquote.getError}</MessageBox>;
    } else {
      if (isEmpty(aliquote.results)) {
        return <ListaVuota />;
      } else {
        return (
          <React.Fragment>
            <FabFixed onClick={handleReqAdd} />
            <Form
              open={open}
              onClose={handleUnset}
              onSubmit={handleSubmit}
              defaultValues={selectedObject}
            />
            <ConfirmDelete
              id="conferma-elimina-aliquota-iva"
              title="Sei sicuro di voler cancellare questa aliquota?"
              content="cancellando questa aliquota non sarà più possibile recuperarla"
              status={deletableObject > 0}
              handleUnset={() => setDeletableObject(0)}
              handleSubmit={handleDelete}
            />

            <Card>
              <CardHeader
                className={classes.cardHeader}
                title="Tutte le aliquote"
              />
              <CardContent className={classes.cardContent}>
                <Table table={{ size: "small" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ width: 150 }}>Data</TableCell>
                      <TableCell style={{ width: 150 }}>Aliquota</TableCell>
                      <TableCell>Descrizione</TableCell>
                      <TableCellIcon>
                        <EditIcon />
                      </TableCellIcon>
                      <TableCellIcon>
                        <DeleteForeverIcon />
                      </TableCellIcon>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {aliquote.results.map((o, i) => {
                      return (
                        <TableRow key={i}>
                          <TableCell>{o.data}</TableCell>
                          <TableCell>
                            <Percentuale value={o.aliquota} />
                          </TableCell>
                          <TableCell>{tipiAliquote[o.descrizione]}</TableCell>
                          <TableCellIcon>
                            <IconButton
                              className={classes.editButton}
                              onClick={() => handleReqEdit(o)}
                            >
                              <EditIcon />
                            </IconButton>
                          </TableCellIcon>
                          <TableCellIcon>
                            <IconButton
                              className={classes.deleteButton}
                              onClick={() => setDeletableObject(o.id)}
                            >
                              <DeleteForeverIcon />
                            </IconButton>
                          </TableCellIcon>
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
