import React from "react";
import DashboardNavbar from "../../_components/dashboardnavbar";

export default function OrganizationIdlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DashboardNavbar />
      <main>{children}</main>
    </section>
  );
}
