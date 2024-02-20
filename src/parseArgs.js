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
    demandOption:
      'A GitHub repository URL is required. Use --url or -u to specify the repository.',
  }).argv

  if (!args.url) {
    throw new Error(
      'A GitHub repository URL is required. Use --url or -u to specify the repository.'
    )
  }

  return { repoUrl: args.url }
}

module.exports = { parseCommandLineArguments }
