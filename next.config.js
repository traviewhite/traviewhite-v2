const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['gsap']
});

module.exports = {
  target: "serverless",
  devIndicators: {
    autoPrerender: false,
  },
  build: {
    transpile: ['gsap'],
  },
};
//module.exports = require("gsap/ScrollTrigger")

