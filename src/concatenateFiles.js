const fs = require('fs')

/**
 * Concatenates the content of multiple markdown files into a single string.
 * @param {string[]} filePaths - An array of file paths to concatenate.
 * @returns {string} The concatenated content of the files.
 */
function concatenateFiles(filePaths) {
  return filePaths
    .map(filePath => fs.readFileSync(filePath, 'utf8'))
    .join('\n\n')
}

module.exports = { concatenateFiles }
