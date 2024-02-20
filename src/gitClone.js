const simpleGit = require('simple-git')

/**
 * Clones a GitHub repository to the specified destination path.
 * @param {string} repoUrl - The URL of the GitHub repository.
 * @param {string} destinationPath - The path to clone the repository into.
 * @returns {Promise<string>} A promise that resolves with a success message or rejects with an error.
 */
function cloneRepository(repoUrl, destinationPath) {
  return new Promise((resolve, reject) => {
    simpleGit().clone(repoUrl, destinationPath, [], (err, result) => {
      if (err) {
        reject(new Error('Failed to clone the repository: ' + err.message))
      } else {
        resolve('Repository successfully cloned to ' + destinationPath)
      }
    })
  })
}

module.exports = { cloneRepository }
