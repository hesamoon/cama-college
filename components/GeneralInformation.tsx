"use client";

import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function GeneralInformation() {
  const [gInfo, setGInfo] = useState({
    firstName: "",
    lastName: "",
    number: "",
    job: "Teacher",
  });

  return (
    <div className="grid grid-cols-2 gap-6">
      <TextField
        label="First Name"
        value={gInfo.firstName}
        onChange={(e) => setGInfo({ ...gInfo, firstName: e.target.value })}
        // error
        // helperText="fff"
      />

      <TextField
        label="Last Name"
        value={gInfo.lastName}
        onChange={(e) => setGInfo({ ...gInfo, lastName: e.target.value })}
      />

      <TextField
        label="Phone Number"
        type="number"
        value={gInfo.number}
        onChange={(e) => setGInfo({ ...gInfo, number: e.target.value })}
      />

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-label">Job Title</InputLabel>
        <Select
          labelId="select-label"
          value={gInfo.job}
          label="Job Title"
          onChange={(e) => setGInfo({ ...gInfo, job: e.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default GeneralInformation;
