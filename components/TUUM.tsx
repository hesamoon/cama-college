"use client";

import dynamic from "next/dynamic";

const TUUMAssistant = dynamic(() => import("../components/TUUMAssistant"), {
  ssr: false,
});

function TUUM() {
  return <TUUMAssistant />;
}

export default TUUM;
