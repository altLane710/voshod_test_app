import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { IBrandModels, IModels } from "@/common/types";

export default function ModelsSelect({
  value,
  label,
  models,
  onChange,
}: {
  value: string[];
  label: string;
  models: IModels;
  onChange: (v: string[]) => void;
}) {
  const handleChange = (event: SelectChangeEvent<any>) => {
    console.log(event.target);
    const {
      target: { value },
    } = event;

    onChange(value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <InputLabel htmlFor="models-select">{label}</InputLabel>
      <Select
        id="models-select"
        multiple
        value={value}
        label={label}
        onChange={handleChange}
      >
        {models.values.reduce((acc: any, v: IBrandModels) => {
          acc.push(<ListSubheader key={v.brand}>{v.brand}</ListSubheader>);
          acc.push(
            ...v.models.map((model) => (
              <MenuItem key={`${v.brand}${model}`} value={model}>
                {model}
              </MenuItem>
            ))
          );
          return acc;
        }, [])}
      </Select>
    </FormControl>
  );
}
