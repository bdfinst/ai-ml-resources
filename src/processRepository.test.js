jest.mock('../src/parseArgs')
jest.mock('../src/gitClone')
jest.mock('../src/findMarkdownFiles')
jest.mock('../src/removeFrontmatter')
jest.mock('../src/concatenateFiles')
jest.mock('../src/removeClonedRepository')

const { processRepository } = require('./processRepository')
const { parseCommandLineArguments } = require('./parseArgs')
const { cloneRepository } = require('./gitClone')
const { findMarkdownFiles } = require('./findMarkdownFiles')
const { removeFrontmatterFromFile } = require('./removeFrontmatter')
const { concatenateFiles } = require('./concatenateFiles')
const { removeClonedRepository } = require('./removeClonedRepository')

describe('processRepository', () => {
  it('executes the workflow successfully with valid inputs', async () => {
    const repoUrl = 'https://github.com/user/repo'
    const destinationPath = '/tmp/cloned-repo'
    const outputPath = '/home/user/Downloads/combined.md'
    const markdownFiles = [
      '/tmp/cloned-repo/file1.md',
      '/tmp/cloned-repo/file2.md',
    ]

    parseCommandLineArguments.mockReturnValue({ repoUrl })
    cloneRepository.mockResolvedValue()
    findMarkdownFiles.mockResolvedValue(markdownFiles)
    removeFrontmatterFromFile.mockImplementation(content => content) // Simulate removing frontmatter
    concatenateFiles.mockReturnValue('Combined markdown content')
    removeClonedRepository.mockResolvedValue()

    await processRepository(['node', 'script.js', '--url', repoUrl])

    expect(parseCommandLineArguments).toHaveBeenCalledWith(expect.any(Array))
    expect(cloneRepository).toHaveBeenCalledWith(repoUrl, expect.any(String))
    expect(findMarkdownFiles).toHaveBeenCalledWith(destinationPath)
    expect(concatenateFiles).toHaveBeenCalledWith(markdownFiles, outputPath)
    expect(removeClonedRepository).toHaveBeenCalledWith(destinationPath)
  })
})
