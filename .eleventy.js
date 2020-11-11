module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
