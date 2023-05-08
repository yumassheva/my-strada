import { storage } from "/src/js/storage.js";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {options3} from "/src/js/constant.js";
function SelectAutorize({ onChange }) {
  if (!storage.getMail()) {
    return null;
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Ваша выборка</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        defaultValue=""
        onChange={onChange}
      >
        {options3.map(({ id, option }) => (
          <MenuItem value={option} key={id} id={id}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export { SelectAutorize };
