const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8081',	
      // target: 'http://210.109.60.198:8089',	
      changeOrigin: true,
    })
  );
};