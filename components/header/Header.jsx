import React from "react";


import SessionProvider from "@/app/providers";
import { auth } from "@/lib/auth";

const Header = async () => {
  const session = await auth();

  return <SessionProvider session={session} />;
};

export default Header;
