let BaseUrl = ''

switch (process.env.NODE_ENV) { // 注意变量名是自定义的
  case 'development':
    BaseUrl = process.env.VUE_APP_BASE_API // 'http://localhost:8087' // 开发环境url
    break
  case 'production':
    BaseUrl = process.env.VUE_APP_REQUEST_URL // 'http://localhost:8085' // 生产环境url
    break
}

export default BaseUrl
