"use client";

import { Box } from "@mui/material";

import { ICatalogFilter } from "@/common/types";
import { useAppContext } from "@/common/context";

import MultipleSelect from "./MultipleSelect";
import ModelsSelect from "./ModelsSelect";

export default function CarsFilter({ filter }: { filter: ICatalogFilter }) {
  const { brand, model, tarif, setValue } = useAppContext();

  function handleChangeBrand(v: string[]) {
    setValue({ name: "brand", value: v });
  }

  function handleChangeModels(v: string[]) {
    setValue({ name: "model", value: v });
  }

  function handleChangeTarif(v: string[]) {
    setValue({ name: "tarif", value: v });
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mb: 2,
      }}
    >
      <MultipleSelect
        value={brand}
        label="Марки"
        options={filter.brands.values.map((v) => ({ value: v, display: v }))}
        onChange={handleChangeBrand}
      />

      <ModelsSelect
        value={model}
        label="Модели"
        models={filter.models}
        onChange={handleChangeModels}
      />

      <MultipleSelect
        value={tarif}
        label="Тарифы"
        options={Object.entries(filter.tarif.values).map((v) => ({
          value: v[0],
          display: v[1],
        }))}
        onChange={handleChangeTarif}
      />
    </Box>
  );
}
