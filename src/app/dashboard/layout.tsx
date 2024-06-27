import { auth, isAuthenticated } from "@/auth/auth";
import { redirect } from "next/navigation";
import HomeDashboard from "./_components/home-dashboard";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/");
  }
  const user = await auth();
  if (!user || !user.is_admin) {
    redirect("/");
  }
  return <HomeDashboard> {children}</HomeDashboard>;
}
