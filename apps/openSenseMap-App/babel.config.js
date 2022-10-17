module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@/components": "./components",
            "@/lib": "./lib",
            "@/features": "./features",
            "@/pages": "./pages",
            "@/stores": "./stores",
          },
        },
      ],
    ],
  };
};
