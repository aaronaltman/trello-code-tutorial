import Navbar from "@/app/(marketing)/_components/navbar";
import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="flex justify-center items-center pt-28">{children}</div>
    </section>
  );
}
