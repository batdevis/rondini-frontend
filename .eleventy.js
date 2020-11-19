module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');

  eleventyConfig.addHandlebarsShortcode("localeSwitch", function(locale) {
    return `/${locale}${this.page.url.substr(3)}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
