import { redirect } from "next/navigation";

function page() {
  redirect("/profile/dashboard");
}

export default page;
