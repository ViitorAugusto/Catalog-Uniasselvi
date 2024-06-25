import { auth } from "@/auth/auth";
import Footer from "@/components/footer";
import NavBar from "@/components/header/navbar";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();

  
  return (
    <div>
      <NavBar name={user?.name ?? ''}/>
      {children}
      <Footer />
    </div>
  );
}
