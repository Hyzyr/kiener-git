module.exports = function(eleventyConfig) {
  // 1. Copy your assets and JS directly to dist
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Note: We don't copy JS here because your package.json scripts handle JS manually 
  // (copying for dev, minifying for prod).

  // 2. Watch SCSS so the server reloads when styles change
  eleventyConfig.addWatchTarget("./src/scss/");

  return {
    dir: {
      input: "src",
      output: "dist",      // Keeps your current output folder name
      includes: "_includes" // Where your components will live
    },
    // Use Nunjucks for HTML templates
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};