
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev ,//是否把vue中的css打包 
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false //热重载 是否开启 根据环境变量自动生成
  }
}
