"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// components
import BioSkeleton from "./skeletons/BioSkeleton";

// api
import { getMe } from "@/lib/api/auth";

function Bio() {
  const { data: myData, isLoading: isLoadingMe } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  const [bio, setBio] = useState("");

  useEffect(() => {
    if (myData?.data.data) {
      setBio(myData?.data.data.bio || "");
    }
  }, [myData]);

  if (isLoadingMe) return <BioSkeleton />;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor=""
        className="body-small text-txt-on-surface-secondary-light"
      >
        Title
      </label>
      <textarea
        className="outline-none border border-outline-level1 rounded-[0.375rem] p-2 body-medium text-txt-on-surface-secondary-light resize-none hover:border-outline-level2 hover:shadow-[0_1px_3px_rgba(255,203,5,0.15)] focus:border-[#906E3E] focus:shadow-[1px_1px_4px_rgba(255, 203, 5, 0.15)]"
        rows={6}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
    </div>
  );
}

export default Bio;
