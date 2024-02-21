const { glob } = require('glob')

/**
 * Asynchronously searches for markdown files in a given directory.
 * @param {string} directoryPath - The path of the directory to search within.
 * @returns {Promise<string[]>} A promise that resolves with an array of file paths.
 */
async function findMarkdownFiles(directoryPath) {
  return await glob(`${directoryPath}/**/*.md`, { ignore: 'node_modules/**' })
}

module.exports = { findMarkdownFiles }
