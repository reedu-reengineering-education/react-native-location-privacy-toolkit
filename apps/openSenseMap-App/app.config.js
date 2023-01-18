module.exports = {
  extra: {
    maptilerKey: "s6ZwTwU4u8uKGSjMhzHX",
    osemApi: "https://api.opensensemap.org",
  },
  android: {
    package: "de.reedu.openSenseMapApp",
  },
  ios: {
    bundleIdentifier: "de.reedu.openSenseMapApp",
  },
  expo: {
    plugins: ["@maplibre/maplibre-react-native"],
  },
};
