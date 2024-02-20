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

module.exports = { removeFrontmatterFromFile }
