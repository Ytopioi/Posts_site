import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export const PageNotFound = () => {

  return (
    <>
		<div className={cn("add__margin")} role="presentation" onClick={handleClickBread}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/">
						Home
					</Link>
					<Link underline="hover" color="inherit" href="/">
						All Posts
					</Link>
					<Typography color="text.primary">Page Not Found</Typography>
				</Breadcrumbs>
		</div>
		<h1 className={cn('text_not_found')}>Ошибка 404<br/>Страница не найдена</h1>
    </>
  );
};
