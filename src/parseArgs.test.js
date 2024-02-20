const { parseCommandLineArguments } = require('./parseArgs')

describe('parseCommandLineArguments', () => {
  it('should extract the GitHub URL from the command line arguments', () => {
    const argv = ['node', 'script.js', '--url=https://github.com/user/repo']
    const { repoUrl } = parseCommandLineArguments(argv)
    expect(repoUrl).toBe('https://github.com/user/repo')
  })

  it('should return undefined if the URL argument is missing', () => {
    const argv = ['node', 'script.js']
    const { repoUrl } = parseCommandLineArguments(argv)
    expect(repoUrl).toBeUndefined()
  })

  it('should handle and parse additional arguments correctly', () => {
    const argv = [
      'node',
      'script.js',
      '--url=https://github.com/user/repo',
      '--branch=main',
    ]
    const { repoUrl, branch } = parseCommandLineArguments(argv)
    expect(repoUrl).toBe('https://github.com/user/repo')
    expect(branch).toBe('main')
  })
})
