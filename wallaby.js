module.exports = function () {
    return {
      files: [
        'server/dist/**/*.js'
      ],
  
      tests: [
        'server/test/**/*.spec.js'
      ],
  
      env: {
        type: 'node',
        runner: 'node'  // or full path to any node executable
      }
    };
  };