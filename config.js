// config.js
export default {
  site: {
    title: 'CheJSfinalBlog'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'chejsfinalblog',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY || 'WkvbJQs6z0nvA30OjVs25cUXRM0e8PcChkbuZYsn7uRh536LMF',
    write_key: process.env.COSMIC_WRITE_KEY || 'Z8pbSrpAJAsRGDfiDBq1r2QWPWo9XYC5iwVqIvpTkLIBPHLwSg'
  },
}

// // config.js
// export default {
//   site: {
//     title: 'CheJSfinalBlog'
//   },
//   bucket: {
//     slug: process.env.COSMIC_BUCKET,
//     media_url: 'https://cosmicjs.com/uploads',
//     read_key: process.env.COSMIC_READ_KEY,
//     write_key: process.env.COSMIC_WRITE_KEY,
//   },
// }
