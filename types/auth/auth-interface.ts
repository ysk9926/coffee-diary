export interface KakaoProfile {
  id: number;
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image?: string;
  };
  kakao_account?: {
    email?: string;
    gender?: string;
    age_range?: string;
  };
}
