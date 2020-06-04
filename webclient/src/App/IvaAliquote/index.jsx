import React from "react";
import moment from "moment";
import { isEmpty, filter, forEach } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { action } from "~/store";
import { Layout } from "~/Layout";
import { FabFixed, FabFixedContainer } from "~/Components";
import { Lista } from "./Lista";
import { Form } from "./Form";

export function IvaAliquote(props) {
  const dispatch = useDispatch();
  let { aliquote, aliquoteQ } = useSelector((state) => state.iva);
  const oggi = moment(new Date()).format("YYYY-MM");
  const [periodo, setPeriodo] = React.useState(oggi);

  const descrizione = {
    O: "Ordinaria",
    R: "Ridotta",
    M: "Minima",
    E: "Esente",
  };

  // Aggiorna la lista delle aliquote IVA
  React.useEffect(() => {
    dispatch(action.ivaAliquote.get());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(action.ivaAliquote.getQ(periodo));
  }, [dispatch, periodo]);

  // Form
  const initialValues = {
    id: null,
    data: {
      value: new Date(),
      error: false,
    },
    descrizione: {
      value: "O",
      error: false,
    },
    aliquota: {
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
      descrizione: {
        value: object.descrizione,
        error: false,
      },
      aliquota: {
        value: object.aliquota,
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
    let newValues = {};

    forEach(formValues, (v, k) => {
      if (k === "id") {
        newValues["id"] = v;
      } else {
        newValues[k] = v.value;

        if (k === "data") {
          newValues[k] = moment(v.value).format("YYYY-MM-DD");
        }
      }
    });

    // SALVA O MODIFICA UN'ALIQUOTA
    // DA IMPLEMENTARE

    // Chiude il dialog
    handleClose();
  };

  // Controlla che il form sia valido
  React.useEffect(() => {
    const errorFormObj = filter(values, ["error", true]);

    setFormError(!isEmpty(errorFormObj));
  }, [values]);

  return (
    <Layout title="Aliquote IVA">
      <FabFixedContainer>
        <FabFixed onClick={handleOpen} />
        <Form
          open={open}
          options={descrizione}
          values={values}
          error={formError}
          onClose={handleClose}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <Box mb={4}>
          <Lista
            subject="Aliquote Correnti"
            search
            searchValue={periodo}
            onSearch={setPeriodo}
            options={descrizione}
            {...aliquoteQ}
          />
        </Box>

        <Box>
          <Lista
            subject={"Tutte le Aliquote"}
            options={descrizione}
            editable
            onEdit={handleReqEdit}
            {...aliquote}
          />
        </Box>
      </FabFixedContainer>
    </Layout>
  );
}
