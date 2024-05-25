"use client";

import { SessionProvider } from "next-auth/react";

export interface AuthcontextProps {
  children: React.ReactNode;
};

export default function AuthContext({ children }: AuthcontextProps) {
  return <SessionProvider>{children}</SessionProvider>;
};
