/**
 * Removes Hugo frontmatter from markdown content.
 * @param {string} markdownContent - The content of the markdown file.
 * @returns {string} The markdown content without frontmatter.
 */
function removeFrontmatterFromFile(markdownContent) {
  // Adjusted regular expression to match Hugo frontmatter blocks and any following whitespace
  const frontmatterRegex = /^---[\s\S]+?---\s*/
  return markdownContent.replace(frontmatterRegex, '')
}

function removeCode(markdownContent) {
  // Adjusted regular expression to match Hugo frontmatter blocks and any following whitespace
  const codeBlockRegex = /```(?:[^\n]+)?\n[\s\S]*?\n```/gs
  return markdownContent.replace(codeBlockRegex, '')
}

function convertLinksToPlainText(markdown) {
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  return markdown.replace(markdownLinkRegex, '$1')
}

function addH1HeaderFromFrontmatter(markdownContent) {
  // Regular expression to match the title in the frontmatter
  const titleRegex = /^---\s*\n[\s\S]*?^title:\s*(.*?)\s*\n[\s\S]*?^---\s*\n/gm

  // Extract the title from the frontmatter
  const matches = titleRegex.exec(markdownContent)

  if (matches && matches[1]) {
    // If a title is found, prepend it as an H1 header to the markdown content
    const title = matches[1]
    // Ensure not to duplicate the H1 if it already exists right after the frontmatter
    const markdownWithoutFrontmatter = markdownContent.replace(
      /^---[\s\S]+?^---\s*\n/gm,
      ''
    )
    if (!markdownWithoutFrontmatter.trimStart().startsWith(`# ${title}`)) {
      return `# ${title}\n\n${markdownWithoutFrontmatter}`
    }
  }

  // Return the original markdown content if no title is found in the frontmatter
  return markdownContent
}

function compose(...functions) {
  return markdownContent => {
    return functions.reduceRight(
      (acc, currentFunction) => currentFunction(acc),
      markdownContent
    )
  }
}

function removeMultipleBlankLines(text) {
  // Regular expression that matches two or more consecutive newline characters
  // \s matches any whitespace character, * matches zero or more of the preceding token (greedy)
  // We use \n to specifically target newline characters and replace them with a single newline
  const multipleBlankLinesRegex = /(\n\s*){2,}/g

  // Replace occurrences of two or more consecutive newline characters with a single newline
  return text.replace(multipleBlankLinesRegex, '\n\n')
}

function cleanMarkdown(markdown) {
  const processMarkdownContent = compose(
    convertLinksToPlainText,
    removeCode,
    addH1HeaderFromFrontmatter,
    removeFrontmatterFromFile,
    removeMultipleBlankLines
  )
  return processMarkdownContent(markdown)
}

module.exports = { cleanMarkdown }
