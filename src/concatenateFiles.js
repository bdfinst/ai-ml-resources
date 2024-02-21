const fs = require('fs')

/**
 * Concatenates the content of multiple markdown files into a single string.
 * @param {string[]} stringArr - An array of file paths to concatenate.
 * @returns {string} The concatenated content of the files.
 */
function concatenateFiles(stringArr) {
  return stringArr.join('\n\n')
}

module.exports = { concatenateFiles }
