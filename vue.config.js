module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8088', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}