const path = require('path')
const CracoLessPlugin = require("craco-less");
const resolve = pathName => path.resolve(__dirname, pathName)

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      // option: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { "@primary-color": "#1DA57A" },
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
    },
  ],
  // 别名
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
};