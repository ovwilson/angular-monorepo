module.exports = function (w) {
    return {
      files: [
        './src/**/*.ts',
        './tests/*.json'
      ],
  
      tests: [
        './tests/*.spec.ts'
      ],
  
      env: {
        type: 'node',
        runner: 'node'  // or full path to any node executable
      },
      workers: {
        restart:true
      }
    };
  };