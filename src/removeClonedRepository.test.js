const { removeClonedRepository } = require('../src/removeClonedRepository')
const fs = require('fs')

// Mock fs.rmSync to simulate removing directories
jest.mock('fs', () => ({
  rmSync: jest.fn(),
}))

describe('removeClonedRepository', () => {
  it('successfully removes the cloned repository directory', () => {
    const directoryPath = '/tmp/cloned-repo'
    expect(() => removeClonedRepository(directoryPath)).not.toThrow()
    expect(fs.rmSync).toHaveBeenCalledWith(directoryPath, {
      recursive: true,
      force: true,
    })
  })

  it('throws an error if the directory cannot be removed', () => {
    fs.rmSync.mockImplementationOnce(() => {
      throw new Error('Failed to remove directory')
    })
    const directoryPath = '/tmp/non-existent-repo'
    expect(() => removeClonedRepository(directoryPath)).toThrow(
      'Failed to remove directory'
    )
  })
})
