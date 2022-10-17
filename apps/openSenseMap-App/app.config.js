module.exports = {
  extra: {
    maptilerKey: process.env.MAPTILER_KEY,
    osemApi: "https://api.opensensemap.org",
  },
  plugins: [
    [
      "@rnmapbox/maps",
      {
        RNMapboxMapsImpl: "maplibre",
      },
    ],
  ],
};
