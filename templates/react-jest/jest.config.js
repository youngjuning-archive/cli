module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
