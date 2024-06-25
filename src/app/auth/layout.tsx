import { isAuthenticated } from "@/auth/auth";
import { redirect } from "next/navigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (isAuthenticated()) {
    redirect("/");
  }
  return <div>{children}</div>;
}
