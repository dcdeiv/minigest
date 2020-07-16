import React from "react";
import { useDispatch } from "react-redux";
import { FabFixed, ConfirmDelete } from "@minigest/ui";
import { Lista } from "./Lista";
import { Form } from "./Form";
import { action } from "src/state";

export function Content({ data }) {
  const dispatch = useDispatch();
  const defaultValues = {
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

  const [openForm, setOpenForm] = React.useState(false);
  const [selectedObject, setSelectedObject] = React.useState(defaultValues);
  const [deletableObject, setDeletableObject] = React.useState(0);

  const handleNewObj = () => {
    setSelectedObject(defaultValues);
    setOpenForm(true);
  };

  const handleClearForm = () => {
    setOpenForm(false);
    setSelectedObject(defaultValues);
  };

  const handleReqEdit = (object) => {
    setSelectedObject({
      id: object.id,
      codice: {
        value: object.codice,
        error: false,
      },
      descrizione: {
        value: object.descrizione,
        error: false,
      },
    });
    setOpenForm(true);
  };

  const handleSubmit = (object) => {
    const objectCopy = { ...object };

    if (object.id) {
      dispatch(action.regimeFiscale.put(objectCopy));
    } else {
      delete objectCopy.id;
      dispatch(action.regimeFiscale.post(objectCopy));
    }

    handleClearForm();
  };

  const handleDelete = () => {
    console.log(deletableObject);
    dispatch(action.regimeFiscale.remove(deletableObject));
    setDeletableObject(0);
  };

  return (
    <React.Fragment>
      <FabFixed onClick={handleNewObj} />

      <Form
        open={openForm}
        onClose={handleClearForm}
        onSubmit={handleSubmit}
        defaultValues={selectedObject}
      />

      <ConfirmDelete
        id="conferma-elimina-regime-fiscale"
        title="Sei sicuro di voler cancellare questo regime fiscale?"
        content="cancellando questo regime fiscale non sarà più possibile recuperarlo"
        status={deletableObject > 0}
        handleUnset={() => setDeletableObject(0)}
        handleSubmit={handleDelete}
      />

      <Lista data={data} onEdit={handleReqEdit} onDelete={setDeletableObject} />
    </React.Fragment>
  );
}
