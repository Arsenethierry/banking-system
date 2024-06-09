import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const logedIn = {
        firstName: "Arsene",
        lastName: "Thierry",
    }
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={logedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
