const path = require("path");

module.exports = {
  entry: "./src/test.js", //webpack 을 빌드할 파일을 알려주는 역할, src/test.js기준으로 import 되어있는 모든 파일을 찾아 하나의 파일로 합치게됨
  output: {
    //webpack에서 빌드를 완료하면 output에 명시되어있는 정보를 통해 빌드파일을 생성함
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  mode: "none", //mode는 빌드 옵션. production은 최적화되어 빌드가 되고, development는 빠르게 빌드하고, none는 아무 기능 없이 웹팩으로 빌드함
};
