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
### b) (ts설치)
-   npm install -g typescript
-   npm link typescript
### c) yarn add tsc-watch --dev
-   package.json 에 start 수정
    -   "start": "tsc-watch --onSuccess \"node dist/index.js\" "
        -  yarn start 시 dist/index.js를 감시 하는 동작(수정 시마다 재실행)
### d) create tsconfig.json

-   nodejs를 평범하게 사용하고 다양한걸 import 하거나 export 가능케 해주는 세팅
        
            "compilerOptions": {
        "module": "commonjs", 
        "target": "ES2015", //어떤 버전의 JS로 컴파일 되고싶은 지
        "sourceMap": true, //sourceMap 처리를 하고싶은지
        "outDir": "dist" //컴파일된 js파을 dist 폴더에 생성
        },
        "include": ["src/**/*"], //컴파일 과정에 포함되는 파일들의 배열 ,src 폴더에 있는 모든 것을 컴파일
        "exclude": ["node_modules"] //어떤 node_modules도 설치 x 제외 해놓기

## 2.FunctionInTS
-   TS에서 함수 선언 방식을 설명한다
-    ` (숫자 1 옆에) 기호와 ${} 이용하면 문자열 안에서 변수 사용가능
-    ex) \`${a.name}`

## 3.InterfaceInTS
-   인터페이스 정의

## 4.class
-   접근제한자,클래스,생성자,멤버함수,nullable(?) 설명,