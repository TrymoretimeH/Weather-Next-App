"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    if (session.user) {
      return (
        <div className="w-full">
          <div className="flex justify-between w-full px-4  mt-4">
            <p>Hi, {session.user.email}</p>
            <button className="px-4 py-2 text-white bg-black rounded-xl" onClick={() => signOut()}>Sign Out</button>
          </div>
          <div className="text-center underline">
            <Link href="/weatherApp">Weather App</Link>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="text-center">
        <p>You are not signed in.</p>
        <button className="px-4 py-2 mt-4 text-white bg-black rounded-xl" onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
};

export default Login;
