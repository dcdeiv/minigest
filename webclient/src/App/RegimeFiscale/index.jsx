import React from "react";
import { isEmpty, filter, forEach } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { action } from "~/store";
import { Layout } from "~/Layout";
import { FabFixed, FabFixedContainer, ConfirmDelete } from "~/Components";
import { Lista } from "./Lista";
import { Form } from "./Form";

export function RegimeFiscale(props) {
  const dispatch = useDispatch();
  let { regimeFiscale } = useSelector((state) => state.fisco);

  // Aggiorna la lista dei regimi fiscali
  React.useEffect(() => {
    dispatch(action.regimeFiscale.get());
  }, [dispatch]);

  // Form
  const initialValues = {
    id: null,
    codice: {
      value: "",
      error: true,
    },
    descrizione: {
      value: "",
      error: true,
    },
  };

  const [open, setOpen] = React.useState(false);
  const [formError, setFormError] = React.useState(true);
  const [values, setValues] = React.useState(initialValues);

  const handleOpen = () => {
    setValues(initialValues);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValues(initialValues);
  };

  const handleReqEdit = (object) => {
    const newValues = {
      id: object.id,
      codice: {
        value: object.codice,
        error: false,
      },
      descrizione: {
        value: object.descrizione,
        error: false,
      },
    };

    setValues(newValues);
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e;

    const newValues = {
      ...values,
      [name]: {
        ...values[name],
        value: value,
        error: value === "" || value === null ? true : false,
      },
    };

    setValues(newValues);
  };

  const handleSubmit = () => {
    const formValues = values;
    let object = {};

    forEach(formValues, (v, k) => {
      if (k === "id") {
        object["id"] = v;
      } else {
        object[k] = v.value;
      }
    });

    if (object.id) {
      dispatch(action.regimeFiscale.put(object));
    } else {
      dispatch(action.regimeFiscale.post(object));
    }

    // Chiude il dialog
    handleClose();
  };

  // Controlla che il form sia valido
  React.useEffect(() => {
    const errorFormObj = filter(values, ["error", true]);

    setFormError(!isEmpty(errorFormObj));
  }, [values]);

  // Controlla l'eliminazione di un'aliquota
  const [idObjectToDel, handleDelObject] = React.useState(0);

  const handleReqDelete = (id) => {
    handleDelObject(id);
  };

  const handleDelete = () => {
    dispatch(action.regimeFiscale.remove(idObjectToDel));
    handleDelObject(0);
  };

  return (
    <Layout title="Regime Fiscale">
      <FabFixedContainer>
        <FabFixed onClick={handleOpen} />

        <ConfirmDelete
          id="conferma-rimozione-rf"
          title="Sei sicuro di voler eliminare questo regime fiscale?"
          content="Eliminando questo regime fiscale non sarà più possibile recuperarlo"
          status={idObjectToDel > 0}
          handleUnset={() => handleDelObject(0)}
          handleSubmit={handleDelete}
        />

        <Form
          open={open}
          values={values}
          error={formError}
          onClose={handleClose}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <Box>
          <Lista
            onEdit={handleReqEdit}
            onDelete={handleReqDelete}
            {...regimeFiscale}
          />
        </Box>
      </FabFixedContainer>
    </Layout>
  );
}
