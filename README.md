# mobile-fe

> 项目使用vue + webpack构建

### 项目结构
```Javascript
|--build
|--config
|--dist             //webpack打包后生成的文件夹
|--node_modules     //项目的依赖所在的文件夹
|--src              //文件入口
|   |--api          //HTTP库的封装
|   |--components   //组件存放文件夹
|       |--xxx.vue  //组件
|   |--config       //全局配置文件
|   |--css          //样式存放文件夹
|   |--router
|       |--index.js //路由配置文件
|   |--views        //视图文件存放文件夹
|   |--App.vue      //最顶层组件
|   |--main.js      //主js文件
|--static
|   |--data         //本地数据存放文件夹
|   |--font         //字体存放文件夹
|   |--img          //图片存放文件夹
|--index.html       //主html文件
|--package.json
```

### 使用技术
- `Vue.js` 轻量级的MVVM框架
  - `vue-router` 前端路由
  - `vuex` Vue.js应用程序开发的状态管理模式
  - `axios` 基于 promise 的 HTTP 库
- `Webpack` 构建工具
- `element-ui` 基于Vue.js的UI组件库

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for application with minification and using the release config.
npm run build

# build for application with minification and using the develop config.
npm run build:dev

# build for application with minification and using the production config.
npm run build:prod

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).