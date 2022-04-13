const { defineConfig } = require('@vue/cli-service')
module.exports =defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions: {
      scss: {
        loader: 'sass-loader',
        prependData: '@import "./src/assets/scss/prepends.scss";'
      }   
    }
  }
}
)
