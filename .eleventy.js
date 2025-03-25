module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'static': '/' });
  eleventyConfig.addPassthroughCopy({ 'node_modules/mvp.css/mvp.css' : '/css/mvp.css' });
  eleventyConfig.addGlobalData('layout', 'docs_layout.liquid');
  eleventyConfig.addGlobalData('title', 'Stuart Rutherford');
  eleventyConfig.addGlobalData('description', 'Stuart Rutherford, known menace to computers');
};
