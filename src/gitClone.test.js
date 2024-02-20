const { cloneRepository } = require('../src/gitClone')
const simpleGit = require('simple-git')

// Mock simple-git
jest.mock('simple-git', () => {
  const mockClone = jest
    .fn()
    .mockImplementation((repoUrl, destinationPath, _, callback) => {
      process.nextTick(() => {
        if (repoUrl && destinationPath) {
          callback(null, 'success')
        } else {
          callback(new Error('Invalid repository URL'), null)
        }
      })
    })
  return jest.fn(() => ({
    clone: mockClone,
  }))
})

describe('cloneRepository', () => {
  it('successfully clones a repository to the specified path', async () => {
    const repoUrl = 'https://github.com/user/repo.git'
    const destinationPath = '/tmp/repo'
    await expect(cloneRepository(repoUrl, destinationPath)).resolves.toContain(
      'success'
    )
    expect(simpleGit().clone).toHaveBeenCalledWith(
      repoUrl,
      destinationPath,
      [],
      expect.any(Function)
    )
  })

  it('throws an error when the repository URL is invalid', async () => {
    const repoUrl = '' // Invalid URL
    const destinationPath = '/tmp/repo'
    await expect(cloneRepository(repoUrl, destinationPath)).rejects.toThrow(
      'Invalid repository URL'
    )
  })
})
