const { processRepository } = require('./src/processRepository')

// Start the application with command-line arguments
processRepository(process.argv).catch(error => {
  console.error('Error processing repository:', error)
  process.exit(1)
})
