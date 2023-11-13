'use client'

import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";


export default  function Home() {

   const { data: session } = useSession();
  console.log(session);
  if (session && session.user) {
    return (
      <LogoutButton/>
    );
  }

  return (
  <LoginButton/>
  );
}
