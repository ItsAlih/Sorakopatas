module.exports = {
  images: {
    domains: ["assets.vercel.com"],
  },
};

const withImages = require("next-images");
module.exports = withImages();
