"use client";

import { useQuery } from "@tanstack/react-query";

// components
import TeacherMenu from "@/components/TeacherMenu";
import InProgressSkeletone from "@/components/skeletons/InProgressSkeletone";

// apis
import { getMe } from "@/lib/api/auth";

function Layout({ children }: { children: React.ReactNode }) {
  // GET
  const { data: myData, isLoading: isLoadingMe } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  if (isLoadingMe) return <InProgressSkeletone />;

  return (
    <div className="w-full space-y-9">
      {/* Show the menu only for teachers */}
      {myData?.data.data.roles[0].name === "teacher" && <TeacherMenu />}

      {children}
    </div>
  );
}

export default Layout;
