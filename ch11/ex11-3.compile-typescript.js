// 리스팅 11.3 빌드 과정에서 타입스크립트를 자바스크립트로 트랜스파일링하는 골격

//file:// plugin/compile-typescript.js
var typescript = Npm.require('ts-compile');

Plugin.registerSourceHandler('ts', handler);

var handler = function (compileStep) {
   var fileContents = compileStep.read().toString('utf8');
   // 트랜스파일링 로직, 결과를 jsCode로 저장
   compileStep.addJavaScript({
      path: outputPath,
      sourcePath: compileStep.inputPath,
      data: jsCode
   });
}
