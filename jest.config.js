module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
  },
  extensionsToTreatAsEsm: ['.jsx'],
  testEnvironment: 'jsdom',
};
