// // config.js
// export default {
//   site: {
//     title: 'CheJSfinalBlog'
//   },
//   bucket: {
//     slug: process.env.COSMIC_BUCKET || 'chejsfinalblog',
//     media_url: 'https://cosmicjs.com/uploads',
//     read_key: process.env.COSMIC_READ_KEY || 'Ip4oXhZ8sFpyAnP8AyJx4ohSGikREWqhVX9Tu9TRPtUndAb5aZ',
//     write_key: process.env.COSMIC_WRITE_KEY || 'Kr0cuoFeZa1nFcFc0KKRAwg872BrslCiVnXyuoJsDXlvKrc72M'
//   },
// }

// config.js
export default {
  site: {
    title: 'CheJSfinalBlog'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET,
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY,
  },
}
