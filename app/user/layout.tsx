// app/layout.tsx
import React from "react";

import { stackServerApp } from "@/stack";
import { getUserDetails } from "@/actions/user.action";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const user = await stackServerApp.getUser();
  let role: string | null = null;

  if (user?.id) {
    const dbUser = await getUserDetails(user.id);
    role = dbUser?.role || "USER";
  }

  // Redirect if not ADMIN or OWNER
  if (role !== "ADMIN" && role !== "OWNER") {
    redirect("/unauthorized");
  }

  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-1">{children}</main>
    </div>
  );
}
