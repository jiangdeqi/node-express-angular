  // Karma configuration
  module.exports = function(config) {
    config.set({
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',
     frameworks: ['jasmine'],
     files: [
      'TestFiles/jasmineTest.js',
      'TestFiles/test.js'
    ],
     exclude: [],
     preprocessors: {
		 'TestFiles/test.js':'coverage'
     },
     reporters: ['progress','coverage'],
	 coverageReporter:{
         type:'html',
         dir:'TestFiles/coverage/'
     },
     port: 9876,
     colors: true,
     logLevel: config.LOG_INFO,
     autoWatch: true,
     browsers: ['Chrome'],
     singleRun: false
   });
 };