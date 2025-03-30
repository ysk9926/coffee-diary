import { NextAuthOptions, Session } from "next-auth";
import KakaoProvider, { KakaoProfile } from "next-auth/providers/kakao";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    // 1. JWT 생성 시 실행되는 콜백 (accessToken, profile 등 받아옴)
    async jwt({ token, account, profile }) {
      const kakaoProfile = profile as KakaoProfile;

      if (account && profile) {
        token.id = kakaoProfile.id;
        token.name = kakaoProfile.properties?.nickname as string;
        token.picture = kakaoProfile.properties?.profile_image as string;
        token.provider = account.provider;
      }
      return token;
    },

    // 2. 클라이언트에서 `useSession()`으로 session 접근 시 호출됨
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
        session.user.provider = token.provider as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login", // 로그인 페이지 커스텀
  },
};
