// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(    
//         '/api',
//         createProxyMiddleware({
//             target: 'https://webapi.developers.erstegroup.com',
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/api': '/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e',
//             }
//         })
//     );
// };  