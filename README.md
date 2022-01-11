## Frontend - Preset

### npm init

    -명령어
        -npm init
        -npm init -y

### gitignore

    - extension -> gitignore 검색 (가장 조회수 많은것 다운)
    - ctrl + shift + p -> add gitignore 검색
    - node 검색 -> 실행

### nodemon
    -npm install -D nodemon
    -```json
         "scripts" : {
                "start" : "nodemon ./index.js",
         },
    ```
    -npm (run) start

### Babel
    -npm install -D @babel/core @babel/cli @babel/preset-env @babel/node 
    -만약 오류 발생시 npm -g install @babel/core @babel/preset-env
    @babel/cli @babel/node
    -루트 디렉터리에 **babel.config.json** 파일 생성
        - ```json
            {
                    "presets" : ["@babel/preset-env"]
            }
            ```
        - ```json
            "scripts" : {
                "start": "nodemon --exec babel-node ./index.js"
            },
        ```
    -npm (run) start

### Eslint & Prettier

    -npm install eslint --save-dev
    -npm eslint --init
    -lint 설정
    -npm i -D eslint-config-prettier eslint-config-tui eslint-plugin-prettier
    -```json
        "lint" : "eslint ./index.js --fix"
    ```

    - eslintc.js
        -module.exports = {
            parserOptions: {
                sourceType: "module"
            },
            env: {
                browser: true,
                es6:true
            },
            extends: ['eslint-config-tui', 'prettier"], //ESLint 규칙으로 Prettier를 실행할 수 있음 // 뒤에 선언된 규칙이 우선순위가 높다.
            plugins: ["prettier"],
            rules: {
                "prettier/prettier": "error",
            },
        };
        ```


###  Jest
- npm install  --save-dev jest babel-jest
- jest.config.json 파일 생성
- ```json
    {
        "clearMocks" : true,
        "collectCoverage" : true,
        "verbose" : true,
        "testEnvironment" : "jsdom"
    }
    
- script수정
- ```json
    "test:jest" : "jest --watchAll --collect[=tru]
    --logHeapUsage"
- test 폴더 하위에 (원하는 파일명).test.js 파일 생성
- **주의 사항!!**
    -```javascript
        // export할 함수 || 객체가 한개일 경우 
        const sum = (a,b) => {
            return a+b;
        };

        export default sum;
        //테스트 파일
        import sum from "../src/index.js";
        //테스트 컨텍스트
    ```
    -```javascript
        //export할 함수 || 객체가 다수일 경우
        export const sum = (a, b) => {
            return a+b;
        };

        export const minus = (a, b) => {
            return a-b
        };
        //테스트 파일

        import { sum, minus } from "../src/index.js";
        //테스트 컨텍스트
```



### parcel

- npm install --save-dev parcel
- npx parcel src/index.html (만약 src폴더 하위에 index.html이 있다면)
- ```json
 "scripts" : {
    "start" : "parcel",
    "build" : "parcel build"
    },
```

- [ ]  Cypress


     