import * as React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CarsList from "@/components/CarsList";
import CarsFilter from "@/components/CarsFilter";

async function getCatalogFilter() {
  const res = await fetch(
    "https://test.taxivoshod.ru/api/test?w=catalog-filter"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch filters");
  }

  return res.json();
}

export default async function Home() {
  const filter = await getCatalogFilter();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Такси "Восход"
        </Typography>

        <CarsFilter filter={filter} />

        <CarsList />
      </Box>
    </Container>
  );
}
