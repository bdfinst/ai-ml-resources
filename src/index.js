// index.js

async function runApp() {
  try {
    const { gitHubUrl } = parseArguments(process.argv)
    const repoName = path.basename(gitHubUrl)
    const clonePath = path.join(os.homedir(), 'tmp', repoName)
    const outputPath = path.join(os.homedir(), 'Downloads', `${repoName}.pdf`)

    await cloneRepository(gitHubUrl, clonePath)
    const markdownFiles = await findMarkdownFiles(clonePath)
    const markdownContent = await mergeMarkdownFiles(markdownFiles) // Simplification for demo purposes
    await convertMarkdownToPDF(markdownContent, outputPath)
    await removeDirectory(clonePath)

    console.log(`PDF generated successfully: ${outputPath}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

module.exports = runApp

if (require.main === module) {
  runApp().catch(err => console.error(err))
}
