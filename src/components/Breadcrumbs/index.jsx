import React from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";

function handleClick(event) {
	event.preventDefault();
 }

const _BreadCrumbs = () => {
  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">All posts</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default _BreadCrumbs;
