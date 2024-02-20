# Prompting for markdown harvesting app

## Step 1 Describe the application

We are building an application to collect all markdown documents from the GitHub repository of a Hugo static site and
consolidate them into a single markdown document. Tech stack: NodeJS, and Jest for testing.

All code should be written in the tech stack above and should be written using functional programming patterns.

The application should perform the following:

- Parse Command Line Arguments for a GitHub URL
- Clone the GitHub Repository to a folder in $HOME/tmp
- Recursively Search for all markdown documents
- Remove the Hugo frontmatter from each document
- concatenate the markdown documents into a single markdown document in $HOME/Downloads
- remove the cloned repository

Patterns:

- when writing tests, use describe instead of test

Provide an overall solution following the guidance mentioned above. Don't generate code. Describe the solution, and
break the solution down as a task list based on the guidance mentioned above. We will refer to this task list as our
master plan.

## Step 2 Define application structure

Rewrite the master plan, this time with detailed component names, functions, and props

### Step 3: Generate code

provide example tests and implementation for parseCommandLineArguments. Test first.
provide example tests and implementation for cloneRepository. Test first.
provide example tests and implementation for findMarkdownFiles. Test first.
provide example tests and implementation for removeFrontmatterFromFile. Test first.
provide example tests and implementation for concatenateFiles. Test first.
provide example tests and implementation for removeClonedRepository. Test first.
provide example tests and implementation for index.js. Test first.
