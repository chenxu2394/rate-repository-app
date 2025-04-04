import "dotenv/config";

export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    permissions: ["android.permission.DETECT_SCREEN_CAPTURE"],
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  newArchEnabled: true,
  extra: {
    env: process.env.ENV,
    apolloUri: process.env.APOLLO_URI || "http://localhost",
    graphqlPort: process.env.GRAPHQL_PORT || 5000,
    restPort: process.env.REST_PORT || 4000,
  },
};
