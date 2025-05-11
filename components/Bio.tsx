"use client";

import { useState } from "react";

function Bio() {
  const [bio, setBio] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor=""
        className="body-small text-txt-on-surface-secondary-light"
      >
        Title
      </label>
      <textarea
        className="outline-none border border-outline-level1 rounded-[0.375rem] p-2 body-medium text-txt-on-surface-secondary-light resize-none"
        rows={6}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
    </div>
  );
}

export default Bio;
