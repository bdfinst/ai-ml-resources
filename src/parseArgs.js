const yargs = require('yargs/yargs')

/**
 * Parses command line arguments and extracts the GitHub repository URL.
 * @param {string[]} argv - The command line arguments array.
 * @returns {Object} An object containing the parsed repository URL and potentially other arguments.
 */
function parseCommandLineArguments(argv) {
  const args = yargs(argv.slice(2)).option('url', {
    alias: 'u',
    describe: 'GitHub repository URL',
    type: 'string',
  }).argv

  return { repoUrl: args.url, branch: args.branch }
}

module.exports = { parseCommandLineArguments }
