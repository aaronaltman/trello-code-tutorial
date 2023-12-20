import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className=" bg-gray-100">
      <Navbar />
      <main className="p-28 h-screen bg-slate-100">
        <h2>{children}</h2>
      </main>
      <Footer />
    </section>
  );
}
