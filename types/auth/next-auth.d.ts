import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      image: string;
      provider: string;
    };
  }

  interface User {
    id: string;
    name: string;
    image: string;
    provider: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    name?: string;
    picture?: string;
    provider: string;
  }
}
