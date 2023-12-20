import React from "react";
import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrgPage() {
  return (
    <section>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl={"/organization/:id"}
        afterCreateOrganizationUrl={"/organization/:id"}
      />
    </section>
  );
}
