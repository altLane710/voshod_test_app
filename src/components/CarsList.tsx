"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination, Typography } from "@mui/material";

import { useAppContext } from "@/common/context";
import { ICar } from "@/common/types";

import CarListItem from "./CarListItem";

export default function CarsList() {
  const { brand, model, tarif, page, pages, setValue } = useAppContext();

  const [cars, setCars] = useState<ICar[]>();

  const handleChangePage = (value: string) => {
    setValue({ name: "page", value });
  };

  const fetchCars = async () => {
    const searchParams = new URLSearchParams();
    for (let i of brand) {
      searchParams.append("brand[]", i);
    }

    for (let i of model) {
      searchParams.append("model[]", i);
    }

    for (let i of tarif) {
      searchParams.append("tarif[]", i);
    }

    searchParams.append("page", page.toString());

    const res = await fetch("/api/catalog-cars?" + searchParams.toString());
    const result = await res.json();
    setCars(result.list);
    setValue({ name: "page", value: Number.parseInt(result.page) });
    setValue({ name: "pages", value: result.pages });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchCars();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [brand, model, tarif, page]);

  if (!cars) return <Typography variant="h4">Loading...</Typography>;

  return (
    <>
      <Pagination
        count={pages}
        page={page}
        size="large"
        onChange={(e, page) => handleChangePage(page.toString())}
        sx={{ mb: 2 }}
      />

      <Box sx={{ my: -2, width: "100%" }}>
        <Grid container spacing={2} sx={{ my: 2 }}>
          {cars.map((v) => (
            <Grid item xs={12} sm={6} md={3} key={v.id}>
              <CarListItem car={v} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
