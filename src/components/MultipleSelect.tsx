import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

export default function MultipleSelect({
  value,
  label,
  options,
  onChange,
}: {
  value: string[];
  label: string;
  options: { value: string; display: string }[];
  onChange: (v: string[]) => void;
}) {
  const handleChange = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;

    onChange(value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        input={<OutlinedInput label={label} />}
        onChange={handleChange}
      >
        {options.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.display}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
