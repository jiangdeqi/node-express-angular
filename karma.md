# 安装
npm install karma
npm install karma-jasmine karma-chrome-launcher
npm install -g karma-cli

# 开启
karma start 

# Karma+Jasmine配置
karma init   

# ---我的创建文件（karma init）不好使，也可以直接拷贝个。
karma.config.js 创建-增加如下代码

---
  // Karma configuration
  // Generated on Fri May 29 2015 19:30:26 GMT+0800 (中国标准时间)
  
  module.exports = function(config) {
    config.set({
  
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',
  
 
     // frameworks to use
     // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     frameworks: ['jasmine'],
 
 
     // list of files / patterns to load in the browser
     files: [
      'TestFiles/jasmineTest.js',
      'TestFiles/test.js'
    ],
 
 
     // list of files to exclude
     exclude: [
     ],
 
 
     // preprocess matching files before serving them to the browser
     // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     preprocessors: {
     },
 
 
     // test results reporter to use
     // possible values: 'dots', 'progress'
     // available reporters: https://npmjs.org/browse/keyword/karma-reporter
     reporters: ['progress'],
 
 
     // web server port
     port: 9876,
 
 
     // enable / disable colors in the output (reporters and logs)
     colors: true,
 
 
     // level of logging
     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     logLevel: config.LOG_INFO,
 
 
     // enable / disable watching file and executing tests whenever any file changes
     autoWatch: true,
 
 
     // start these browsers
     // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     browsers: ['Chrome'],
 
 
     // Continuous Integration mode
     // if true, Karma captures browsers, runs the tests and exits
     singleRun: false
   });
 };

---

# 接下来创建已下2个文件

'TestFiles/jasmineTest.js',
'TestFiles/test.js'

# 对应代码test.js
----
function TT() {
    return "abc";
}
----

# 对应代码jasmineTest.js
----
describe("A suite of basic functions", function () {
    it("test", function () {
        expect("abc").toEqual(TT());

    });
});

----

# 接下来运行，测试第一个例子
karma start karma.config.js

# 进入右侧DEBUG页面 
按F12在控制器中可以看到输出命令


# 代码覆盖率
npm install karma-coverage

#修改karma.config.js
---
 preprocessors: {
	 'TestFiles/test.js':'coverage'
 },
 reporters: ['progress','coverage'],
     
 coverageReporter:{
	 type:'html',
	 dir:'TestFiles/coverage/'
 },
 
 ---
# 运行一下
karma start karma.config.js

TestFiles/coverage下我们将找到生成的覆盖率报告
