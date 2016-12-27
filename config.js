// config.js
export default {
  site: {
    title: 'CheJSfinalBlog'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'chejsfinalblog',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY || 'hiixY1LsPdUrKNoyduuO3XRL5LAQFiDdhHfZoEtkgvO7hpvHVt',
    write_key: process.env.COSMIC_WRITE_KEY || 'YBZuvHgQk8I6UQF2RT5yQqHsNEoTzMJy8YDZVQbCfKW6jo9vta'
  },
}
