// Assuming findMarkdownFiles is a CommonJS module
const { findMarkdownFiles } = require('../src/findMarkdownFiles')
const { glob } = require('glob')

jest.mock('glob', () => {
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

// Mock 'glob' to return a promise
jest.mock('glob', () => ({
  default: jest.fn().mockImplementation((pattern, options, callback) => {
    return new Promise(resolve => {
      let mockFiles = []
      if (pattern.startsWith('/path/to/repo')) {
        mockFiles = [
          '/path/to/repo/file1.md',
          '/path/to/repo/file2.md',
          '/path/to/repo/subdir/file3.md',
        ]
      }
      // Since the original glob uses a callback, you call the callback with (null, mockFiles)
      // if your implementation relies on the callback style.
      if (callback) callback(null, mockFiles)
      resolve(mockFiles) // For promise-based usage
    })
  }),
}))

// Use jest.requireActual to ensure that other 'glob' functionality remains unchanged
// if needed. This is optional and based on your specific mocking needs.

// Corrected mock is assumed to be in place

describe('findMarkdownFiles', () => {
  it.skip('finds and returns paths of all markdown files in a given directory', async () => {
    const directoryPath = '/path/to/repo'
    const files = await findMarkdownFiles(directoryPath)
    expect(files).toEqual([
      '/path/to/repo/file1.md',
      '/path/to/repo/file2.md',
      '/path/to/repo/subdir/file3.md',
    ])
  })

  it.skip('returns an empty array if no markdown files are found', async () => {
    const directoryPath = '/empty/directory'
    const files = await findMarkdownFiles(directoryPath)
    expect(files).toEqual([])
  })
})
