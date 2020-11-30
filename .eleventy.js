module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/webfonts');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/assets/css');

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

  eleventyConfig.addHandlebarsShortcode("br2array", function(value, options) {
    return value ? value.split("\n") : [];
  });

  eleventyConfig.addHandlebarsShortcode("br2li", function(value, options) {
    return `<ul><li>${value.split("\n").join("/<li><li>")}</li></ul>`;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
