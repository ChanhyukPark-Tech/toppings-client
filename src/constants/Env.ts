const env = {
  KAKAO_JAVASCRIPT_KEY: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY,
  REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
  SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  TOPPINGS_TOKEN_KEY: process.env.NEXT_PUBLIC_TOPPINGS_TOKEN_KEY,
  TOPPINGS_SERVER_URL: process.env.NEXT_PUBLIC_TOPPINGS_SERVER_URL
} as const;

export default env;
