const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', //불러올 server 의 api path
        createProxyMiddleware({
            //target: 'http://localhost:8081', //server 주소
            target: 'http://210.109.60.198:8089',
            changeOrigin: true,
        })
    );
};