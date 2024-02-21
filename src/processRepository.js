const { parseCommandLineArguments } = require('./parseArgs')
const { cloneRepository } = require('./gitClone')
const { findMarkdownFiles } = require('./findMarkdownFiles')
const { removeFrontmatterFromFile } = require('./removeFrontmatter')
const { concatenateFiles } = require('./concatenateFiles')
const { removeClonedRepository } = require('./removeClonedRepository')
const fs = require('fs')
const os = require('os')
const path = require('path')

async function processRepository(argv) {
  try {
    const { repoUrl } = parseCommandLineArguments(argv)

    const repoName = repoUrl.split('/').pop()
    const destinationPath = path.join('/tmp', repoName)
    removeClonedRepository(destinationPath)

    const outputPath = path.join(process.cwd(), `${repoName}-combined.md`)

    await cloneRepository(repoUrl, destinationPath)
    console.log(`${outputPath} ${destinationPath}`)
    const markdownFiles = await findMarkdownFiles(destinationPath)

    const markdownContents = markdownFiles.map(filePath => {
      console.log(filePath)
      const content = fs.readFileSync(filePath, 'utf8')
      return removeFrontmatterFromFile(content)
    })

    const combinedContent = concatenateFiles(markdownContents)

    fs.writeFileSync(outputPath, combinedContent)
    console.log(`File created: ${outputPath}`)

    await removeClonedRepository(destinationPath)
  } catch (error) {
    console.error('Failed to process repository:', error)
  }
}

module.exports = { processRepository }
