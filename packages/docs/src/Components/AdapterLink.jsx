import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const AdapterLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));
