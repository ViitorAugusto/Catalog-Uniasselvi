import { auth, isAuthenticated } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiPackage } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { RiLineChartLine } from "react-icons/ri";
import { DashboardHeader } from "./_components/dashboard-header";

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
  return (
    <div>
      {children}
    </div>
  );
}
