jest.mock('../src/processRepository', () => ({
  processRepository: jest.fn(),
}))

const { processRepository } = require('../src/processRepository')

// Simulate command-line arguments
const originalArgv = process.argv
const mockArgv = ['node', 'index.js', '--url=https://github.com/user/repo']

describe('index.js', () => {
  beforeAll(() => {
    process.argv = mockArgv
    // Manually require index.js to simulate running the application
    require('../index')
  })

  afterAll(() => {
    process.argv = originalArgv // Restore original argv
  })

  it('calls processRepository with the correct arguments', () => {
    expect(processRepository).toHaveBeenCalledWith(mockArgv)
  })
})
