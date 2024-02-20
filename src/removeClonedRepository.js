const fs = require('fs')

/**
 * Removes the cloned repository directory.
 * @param {string} directoryPath - The path of the directory to remove.
 */
function removeClonedRepository(directoryPath) {
  try {
    fs.rmSync(directoryPath, { recursive: true, force: true })
  } catch (error) {
    throw new Error('Failed to remove directory: ' + error.message)
  }
}

module.exports = { removeClonedRepository }
