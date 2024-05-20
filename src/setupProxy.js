const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/albums',
    createProxyMiddleware({
      target: 'https://gallery.costime.pro/albums',
      changeOrigin: true,
    })
  );
};
