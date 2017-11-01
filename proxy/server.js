const httpProxy = require('http-proxy')
const gatewayAPIAddress = process.env.GATEWAY_API_ADDRESS

httpProxy
  .createProxyServer({target: 'http://' + gatewayAPIAddress + ':3000'})
  .listen(8080, () => {
    console.log('Proxy to ', gatewayAPIAddress, ' on port', 3000)
  })