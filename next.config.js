const withTM = require('next-transpile-modules');
module.exports = withTM({
  transpileModules: ['gsap']
});
module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  build: {
    transpile: ['gsap'],
  },
};
//module.exports = require("gsap/ScrollTrigger")

