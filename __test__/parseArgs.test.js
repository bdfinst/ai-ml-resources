const { parseCommandLineArguments } = require('../src/parseArgs')

describe('parseCommandLineArguments', () => {
  it('should extract the GitHub URL from the command line arguments', () => {
    const argv = ['node', 'script.js', '--url=https://github.com/user/repo']
    const { repoUrl } = parseCommandLineArguments(argv)
    expect(repoUrl).toBe('https://github.com/user/repo')
  })

  it.skip('should return undefined if the URL argument is missing', () => {
    const argv = ['node', 'script.js']
    expect(parseCommandLineArguments(argv)).toThrow()
  })
})
