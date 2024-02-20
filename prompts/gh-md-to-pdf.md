# GitHub Markdown to PDF

Step 2: Parse Command Line Arguments
Use NodeJS's built-in `process.argv` to accept the GitHub repository URL as a command line argument.
Step 3: Clone the GitHub Repository
Implement functionality to clone the GitHub repository to a local directory. This step is crucial for accessing the repository's files.
Step 4: Recursively Search for Markdown Documents
Utilize a file searching library (e.g., glob) to recursively find all markdown files within the cloned repository. Ensure your search is configured to look for files with the .md extension.
Step 5: Read and Consolidate Markdown Documents
Read the contents of each markdown file found during the search. You may need to use NodeJS's file system module (fs) for this.
Consolidate these contents into a single markdown document. This involves appending the content of each file into one large markdown string or file.
Step 6: Convert the Consolidated Document into a PDF
Use a markdown-to-PDF conversion library (e.g., markdown-pdf) to convert the consolidated markdown document into a PDF file.
Step 7: Cleanup (Optional)
After generating the PDF, you may want to delete the cloned repository and any temporary files or directories created during the process to keep your working environment clean.
Step 8: Testing and Debugging
Thoroughly test your application with various GitHub repositories to ensure it works as expected. Pay special attention to error handling, such as dealing with private repositories or incorrect URLs.
Step 9: Documentation
Document your application, providing instructions on how to install, configure, and use it. Include information on any
prerequisites, how to run the application, and any optional arguments or configurations.

---

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

## Details

Rewrite the master plan, this time with detailed component names, functions, and props

### Code

provide example tests and implementation for parseCommandLineArguments. Test first.
provide example tests and implementation for cloneRepository. Test first.
provide example tests and implementation for findMarkdownFiles. Test first.
provide example tests and implementation for removeFrontmatterFromFile. Test first.
provide example tests and implementation for concatenateFiles. Test first.
provide example tests and implementation for removeClonedRepository. Test first.
provide example tests and implementation for the main app. Test first.
