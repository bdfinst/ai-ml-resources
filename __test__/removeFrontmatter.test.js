const { removeFrontmatterFromFile } = require('../src/removeFrontmatter')

describe('removeFrontmatterFromFile', () => {
  it('removes Hugo frontmatter from a markdown file', () => {
    const mockMarkdownWithFrontmatter = `---
title: "Sample Post"
date: "2021-01-01"
---

# Sample Post

This is a sample post.`
    const expectedMarkdown = `# Sample Post

This is a sample post.`
    expect(removeFrontmatterFromFile(mockMarkdownWithFrontmatter)).toEqual(
      expectedMarkdown
    )
  })

  it('returns the original content if there is no frontmatter', () => {
    const mockMarkdownWithoutFrontmatter = `# Another Post

This is another post without frontmatter.`
    expect(removeFrontmatterFromFile(mockMarkdownWithoutFrontmatter)).toEqual(
      mockMarkdownWithoutFrontmatter
    )
  })
})
