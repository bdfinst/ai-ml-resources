const { parseCommandLineArguments } = require('./parseArgs')
const { cloneRepository } = require('./gitClone')
const { findMarkdownFiles } = require('./findMarkdownFiles')
const { removeFrontmatterFromFile } = require('./removeFrontmatter')
const { concatenateFiles } = require('./concatenateFiles')
const { removeClonedRepository } = require('./removeClonedRepository')
const fs = require('fs')

async function processRepository(argv) {
  try {
    const { repoUrl } = parseCommandLineArguments(argv)
    const destinationPath = '/tmp/cloned-repo' // Simplified for example
    const outputPath = '/home/user/Downloads/combined.md' // Simplified for example

    await cloneRepository(repoUrl, destinationPath)
    const markdownFiles = await findMarkdownFiles(destinationPath)

    const markdownContents = markdownFiles.map(filePath => {
      const content = fs.readFileSync(filePath, 'utf8')
      return removeFrontmatterFromFile(content)
    })

    const combinedContent = concatenateFiles(markdownContents)
    fs.writeFileSync(outputPath, combinedContent)

    await removeClonedRepository(destinationPath)
  } catch (error) {
    console.error('Failed to process repository:', error)
  }
}

module.exports = { processRepository }
