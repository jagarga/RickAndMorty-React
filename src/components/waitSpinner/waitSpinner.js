import * as React from "react";
import { memo } from "react";
import { CircularProgress } from "@mui/material";
import "./waitSpinner.scss";

/**
 * Component with the spinner to show in the waiting time
 */
const WaitSpinner = () => {
  return (
    <div className="spinner">
      <CircularProgress id="circularProgress" size={"12rem"} />
    </div>
  );
};

export default memo(WaitSpinner);
