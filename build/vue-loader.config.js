
module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev, // 是否把 vue 中的 css 打包
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false //热重载 是否开启 根据环境变量自动生成
  }
}
