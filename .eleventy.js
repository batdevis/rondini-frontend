module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');

  eleventyConfig.addHandlebarsShortcode("pgUrl", function(pg, locale, options) {
    return `${locale}/${pg.slug[locale]}`;
  });

  eleventyConfig.addHandlebarsShortcode("pgLink", function(pg, locale, options) {
    const href = `${locale}/${pg.slug[locale]}`;
    const text = pg.title[locale];
    const tag = `<a href=${href}>${text}</a>`;
    return tag;
  });

  eleventyConfig.addHandlebarsShortcode("isActive", function(pg, currentPg, options) {
    return (pg.name == currentPg.name);
  });

  eleventyConfig.addHandlebarsShortcode("logOptions", function(options) {
    console.log(options.data.root);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
