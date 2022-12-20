module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'BIGLOOKS DATA TOKEN PAGE METER DASHBOARD',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'https://oyedele-musa-funso-tranter-fe-test.vercel.app/api' // development api
        : 'https://oyedele-musa-funso-tranter-fe-test.vercel.app/api', // production api
  },
};
