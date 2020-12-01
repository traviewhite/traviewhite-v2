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
  images: {
    domains: ["res.cloudinary.com"],
  },
};
//module.exports = require("gsap/ScrollTrigger")

