const glob = require('glob')

/**
 * Asynchronously searches for markdown files in a given directory.
 * @param {string} directoryPath - The path of the directory to search within.
 * @returns {Promise<string[]>} A promise that resolves with an array of file paths.
 */
function findMarkdownFiles(directoryPath) {
  return new Promise((resolve, reject) => {
    glob(`${directoryPath}/**/*.md`, {}, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

module.exports = { findMarkdownFiles }
