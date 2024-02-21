const { concatenateFiles } = require('../src/concatenateFiles')
const fs = require('fs')

// Mock fs.readFileSync to return predefined content based on the file path
jest.mock('fs', () => ({
  readFileSync: jest.fn(path => {
    const fileContents = {
      '/path/to/file1.md': '# File 1\n\nContent of file 1.',
      '/path/to/file2.md': '# File 2\n\nContent of file 2.',
    }
    return fileContents[path] || ''
  }),
}))

describe('concatenateFiles', () => {
  it('concatenates content of multiple markdown files into a single string', () => {
    const filePaths = ['/path/to/file1.md', '/path/to/file2.md']
    const expectedContent =
      '# File 1\n\nContent of file 1.\n\n# File 2\n\nContent of file 2.'
    const concatenatedContent = concatenateFiles(filePaths)
    expect(concatenatedContent).toEqual(expectedContent)
  })

  it('returns an empty string when the file list is empty', () => {
    const filePaths = []
    const expectedContent = ''
    const concatenatedContent = concatenateFiles(filePaths)
    expect(concatenatedContent).toEqual(expectedContent)
  })
})
