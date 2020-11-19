module.exports = {
  preset: 'react-native',
  verbose: true,
  collectCoverage: true,
  moduleNameMapper: { // for https://github.com/facebook/jest/issues/919
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
    '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': 'RelativeImageStub',
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
