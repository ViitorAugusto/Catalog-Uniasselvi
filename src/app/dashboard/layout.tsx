import { isAuthenticated } from "@/auth/auth";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    if (!isAuthenticated()) {
      redirect("/");
    }
  return <div>{children}</div>;
}
