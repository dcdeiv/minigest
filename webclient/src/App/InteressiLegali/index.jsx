import React from "react";
import moment from "moment";
import { isEmpty, filter, forEach } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { action } from "~/store";
import { Layout } from "~/Layout";
import { FabFixed, FabFixedContainer, ConfirmDelete } from "~/Components";
import { Lista } from "./Lista";
import { Form } from "./Form";

export function InteressiLegali(props) {
  const dispatch = useDispatch();
  let { interessiLegali } = useSelector((state) => state.fisco);

  // Aggiorna la lista degli interessi legali
  React.useEffect(() => {
    dispatch(action.interessiLegali.get());
  }, [dispatch]);

  // Form
  const initialValues = {
    id: null,
    data: {
      value: new Date(),
      error: false,
    },
    percentuale: {
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
      data: {
        value: moment(object.data, "YYYY-MM-DD"),
        error: false,
      },
      percentuale: {
        value: object.percentuale,
        error: false,
      },
    };

    setValues(newValues);
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e;
    let error = true;

    if (name === "data") {
      error = !value.isValid();
    } else {
      error = value === "" || value === null ? true : false;
    }

    const newValues = {
      ...values,
      [name]: {
        ...values[name],
        value: value,
        error: error,
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

        if (k === "data") {
          object[k] = moment(v.value).format("YYYY-MM-DD");
        }
      }
    });

    if (object.id) {
      dispatch(action.interessiLegali.put(object));
    } else {
      dispatch(action.interessiLegali.post(object));
    }

    // Chiude il dialog
    handleClose();
  };

  // Controlla che il form sia valido
  React.useEffect(() => {
    const errorFormObj = filter(values, ["error", true]);

    setFormError(!isEmpty(errorFormObj));
  }, [values]);

  // Controlla l'eliminazione di un tasso
  const [idObjectToDel, handleDelObject] = React.useState(0);

  const handleReqDelete = (id) => {
    handleDelObject(id);
  };

  const handleDelete = () => {
    dispatch(action.interessiLegali.remove(idObjectToDel));
    handleDelObject(0);
  };

  return (
    <Layout title="Interessi Legali">
      <FabFixedContainer>
        <FabFixed onClick={handleOpen} />

        <ConfirmDelete
          id="conferma-rimozione-interesse-legale"
          title="Sei sicuro di voler eliminare questo tasso?"
          content="Eliminando questo tasso non sarà più possibile recuperarlo"
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
            {...interessiLegali}
          />
        </Box>
      </FabFixedContainer>
    </Layout>
  );
}
