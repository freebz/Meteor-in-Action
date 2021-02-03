// 리스팅 11.2 package.js에서 커피스크립트를 지원하는 빌드 플러그 등록

Package.registerBuildPlugin({
   name: "compileCoffeescript",
   use: [],
   source: [
      'plugin/compile-coffeescript.js'
   ],
   npmDependencies: { "coffee-script": "1.7.1", "source-map": "0.1.32" }
});
