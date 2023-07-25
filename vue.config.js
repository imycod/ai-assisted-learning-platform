/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-25 13:21:01
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-25 16:49:35
 * @FilePath: \element-uid:\studio\ai-assist-learning-platform\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}


console.log('process.env.NODE_ENV', process.env.NODE_ENV);
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  configureWebpack: {
    plugins:[
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        'components': resolve('src/components'),
        'assets': resolve('src/assets'),
        'routers': resolve('src/routers'),
        'stores': resolve('src/stores'),
        'configs': resolve('src/configs'),
        'enums': resolve('src/enums'),
        'utils': resolve('src/utils'),
        'layouts': resolve('src/layouts'),
        'apis': resolve('src/apis'),
        'helpers': resolve('src/helpers'),
        'views': resolve('src/views'),
      },
    },
  }
})
