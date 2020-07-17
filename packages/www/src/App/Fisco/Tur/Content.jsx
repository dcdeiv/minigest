import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { FabFixed, ConfirmDelete } from "@minigest/ui";
import { Lista } from "./Lista";
import { Form } from "./Form";
import { action } from "src/state";

export function Content({ data }) {
  const dispatch = useDispatch();
  const defaultValues = {
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
      data: {
        value: moment(object.data, "YYYY-MM-DD"),
        error: false,
      },
      percentuale: {
        value: object.percentuale,
        error: false,
      },
    });
    setOpenForm(true);
  };

  const handleSubmit = (object) => {
    const objectCopy = { ...object };

    if (object.id) {
      dispatch(action.tur.put(objectCopy));
    } else {
      delete objectCopy.id;
      dispatch(action.tur.post(objectCopy));
    }

    handleClearForm();
  };

  const handleDelete = () => {
    dispatch(action.tur.remove(deletableObject));
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
        id="conferma-elimina-tasso-tur"
        title="Sei sicuro di voler cancellare questo tasso?"
        content="cancellando questo tasso non sarà più possibile recuperarlo"
        status={deletableObject > 0}
        handleUnset={() => setDeletableObject(0)}
        handleSubmit={handleDelete}
      />

      <Lista data={data} onEdit={handleReqEdit} onDelete={setDeletableObject} />
    </React.Fragment>
  );
}
