import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

type PlatformLayoutProps = {
  children: React.ReactNode;
};

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <ClerkProvider>
      <div>{children}</div>
    </ClerkProvider>
  );
}
