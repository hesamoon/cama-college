"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";

// components
import GeneralInformationSkeleton from "./skeletons/GeneralInformationSkeleton";

// api
import { getMe } from "@/lib/api/auth";

// constant
import { sx } from "@/constants/data";

function GeneralInformation() {
  const { data: myData, isLoading: isLoadingMe } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  const [gInfo, setGInfo] = useState({
    firstName: "",
    lastName: "",
    number: "",
    job: "",
  });

  useEffect(() => {
    if (myData?.data.data) {
      setGInfo({
        firstName: myData?.data.data.name || "",
        lastName: myData?.data.data.family || "",
        number: myData?.data.data.mobile || "",
        job:
          myData?.data.data?.roles[0].name === "teacher"
            ? "Teacher"
            : "Student",
      });
    }
  }, [myData]);

  if (isLoadingMe) {
    return <GeneralInformationSkeleton />;
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <TextField
        label="First Name"
        value={gInfo.firstName}
        onChange={(e) => setGInfo({ ...gInfo, firstName: e.target.value })}
        sx={sx}
      />

      <TextField
        label="Last Name"
        value={gInfo.lastName}
        onChange={(e) => setGInfo({ ...gInfo, lastName: e.target.value })}
        sx={sx}
      />

      <TextField
        label="Phone Number"
        type="number"
        value={gInfo.number}
        onChange={(e) => setGInfo({ ...gInfo, number: e.target.value })}
        sx={sx}
      />

      <FormControl sx={{ minWidth: 120, ...sx }}>
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
