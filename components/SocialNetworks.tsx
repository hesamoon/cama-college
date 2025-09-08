"use client";

import { useState } from "react";
import { TextField } from "@mui/material";

// constant
import { sx } from "@/constants/data";

function SocialNetworks() {
  const [appsLink, setAppsLink] = useState({
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    pinterest: "",
    youtube: "",
    github: "",
  });

  return (
    <div className="grid grid-cols-2 gap-6">
      <TextField
        label="Twitter"
        value={appsLink.twitter}
        onChange={(e) => setAppsLink({ ...appsLink, twitter: e.target.value })}
        sx={sx}
        // error
        // helperText="fff"
      />
      <TextField
        label="Facebook"
        value={appsLink.facebook}
        onChange={(e) => setAppsLink({ ...appsLink, facebook: e.target.value })}
        sx={sx}
        // error
        // helperText="fff"
      />
      <TextField
        label="Instagram"
        value={appsLink.instagram}
        onChange={(e) => setAppsLink({ ...appsLink, instagram: e.target.value })}
        sx={sx}
        // error
        // helperText="fff"
      />
      <TextField
        label="Linkedin"
        value={appsLink.linkedin}
        onChange={(e) => setAppsLink({ ...appsLink, linkedin: e.target.value })}
        sx={sx}
        // error
        // helperText="fff"
      />
      <TextField
        label="Pinterest"
        value={appsLink.pinterest}
        onChange={(e) => setAppsLink({ ...appsLink, pinterest: e.target.value })}
        sx={sx}
        // error
        // helperText="fff"
      />
      <TextField
        label="youtube"
        value={appsLink.youtube}
        onChange={(e) => setAppsLink({ ...appsLink, youtube: e.target.value })}
        sx={sx}
        // error
        // helperText="fff"
      />
      <TextField
        label="Github"
        value={appsLink.github}
        onChange={(e) => setAppsLink({ ...appsLink, github: e.target.value })}
        sx={sx}
        // error
        // helperText="fff"
      />
    </div>
  );
}

export default SocialNetworks;
