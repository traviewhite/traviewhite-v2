const withTM = require('next-transpile-modules');
const path = require('path')

module.exports = withTM({
  transpileModules: ['gsap']
});

module.exports = {
  target: "serverless",
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  build: {
    transpile: ['gsap'],
  },
  images: {
    domains: ["res.cloudinary.com"],
    // loader: "cloudinary",
    // path: "res.cloudinary.com/twhite"
  },
};
// module.exports = require("gsap/ScrollTrigger")

