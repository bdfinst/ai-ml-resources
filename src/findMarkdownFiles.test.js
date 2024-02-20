const glob = require('glob')
const { findMarkdownFiles } = require('../src/findMarkdownFiles')

// Mocking glob directly as a function
jest.mock('glob', () =>
  jest.fn((pattern, options, callback) => {
    // Simulate different behavior based on the directory path
    let mockFiles = []
    if (pattern.startsWith('/path/to/repo')) {
      mockFiles = [
        '/path/to/repo/file1.md',
        '/path/to/repo/file2.md',
        '/path/to/repo/subdir/file3.md',
      ]
    } // No else needed; default mockFiles is an empty array

    callback(null, mockFiles)
  })
)

// Corrected mock is assumed to be in place

describe('findMarkdownFiles', () => {
  it('finds and returns paths of all markdown files in a given directory', async () => {
    const directoryPath = '/path/to/repo'
    await expect(findMarkdownFiles(directoryPath)).resolves.toEqual([
      '/path/to/repo/file1.md',
      '/path/to/repo/file2.md',
      '/path/to/repo/subdir/file3.md',
    ])
  })

  it('returns an empty array if no markdown files are found', async () => {
    const directoryPath = '/empty/directory'
    await expect(findMarkdownFiles(directoryPath)).resolves.toEqual([])
  })
})
