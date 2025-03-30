"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      console.log("✅ session:", session);
    }
  }, [session]);

  return (
    <div>
      <button onClick={() => signIn("kakao")}>카카오 로그인</button>
    </div>
  );
}
