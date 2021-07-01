
module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    sitemap: {
      urls: [
        'https://localhost:8080/',
        'https://localhost:8080/randomizer',
        'https://localhost:8080/details',
      ]
    }
  }
};


