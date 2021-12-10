# LearningTS

## 0.   [Install yarn](https://hello-bryan.tistory.com/94)   
-   package.json
    -   기본적인 정보와 커멘드 custom을 담당 커멘드는 script부분을 주목


            scripts": {
            "start": "node index.js", //start 커맨드 입력시 동작
            "prestart" : "tsc" //start 커맨드 전에 먼저 실행(ts를 js로 먼저 컴파일)
            }
    -   yarn start로 하면됨
##  1.  Setting

### a) yarn init
### b) yarn global add typescript
### c) create tsconfig.json

-   nodejs를 평범하게 사용하고 다양한걸 import 하거나 export 가능케 해주는 세팅
        
            "compilerOptions": {
        "module": "commonjs", 
        "target": "ES2015", //어떤 버전의 JS로 컴파일 되고싶은 지
        "sourceMap": true //sourceMap 처리를 하고싶은지
        },
        "include": ["index.ts"], //컴파일 과정에 포함되는 파일들의 배열
        "exclude": ["node_modules"] //어떤 node_modules도 설치 x 제외 해놓기