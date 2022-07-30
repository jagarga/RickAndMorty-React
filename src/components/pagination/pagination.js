import * as React from "react";
import { memo } from "react";
import { Pagination, Stack } from "@mui/material";
import "./pagination.scss";

/**
 * Component with pagination bar
 */
const PaginationBar = ({ numberPages, handleChange }) => {
  console.log({ handleChange });
  return (
    <div className="pagination">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          count={numberPages}
          variant="outlined"
          color="primary"
          size="large"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default memo(PaginationBar);
