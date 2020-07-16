import React from "react";
import { Lista } from "./Lista";

export function Content({ data }) {
  const handleAction = (id) => {
    console.log(id);
  };

  return (
    <React.Fragment>
      <Lista data={data} onEdit={handleAction} onDelete={handleAction} />
    </React.Fragment>
  );
}
