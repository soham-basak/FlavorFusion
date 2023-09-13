"use client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
