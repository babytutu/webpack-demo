# 说明
- webpack4 demo，加入了常用loader，eslint，babel，用vue做了个例子
- css文件独立的插件已经换为mini-css-extract-plugin，使用更简单，但配置项过少，还有待进一步优化
- 根据整个研究过程写了几个小demo，在`demo`目录

## install

```bash
npm i
```

## 常用命令

- 启动服务
`配置webpack/webpack.dev.js`

```bash
npm start
```

- 修复eslint
`eslint配置在.eslintrc.js文件中`

```bash
npm run lint-fix
```

- build
`配置webpack/webpack.prod.js`

```bash
npm run build
```

## 附加配置

- babel
- eslint
- postcss
- stylus
- vue
- vue-router

## 目录
```bash
├──  demo                          demo目录，每个文件夹中都有步骤的说明
│     ├──  step1                   从头开始
│     ├──  step2                   附件的引入（Asset Management）
│     ├──  step3                   打包输出（Output Management）
│     ├──  step4                   开发（Development）
│     ├──  step5                   完成webpack配置
│     └──  step6                   结合vue开发
│
├──  src                           vue目录
│     ├──  assets                  图片，样式等
│     ├──  components              组件
│     ├──  view                    页面
│     ├──  app.vue                 底层模版
│     ├──  index.js                开发入口
│     └──  routes.js               路由总入口
│
├──  webpack                       webpack配置信息
│     ├──  webpack.common.js       公共配置
│     ├──  webpack.dev.js          开发模式配置
│     └──  webpack.prod.js         生产模式配置
│
├──  .babelrc                      babel配置
├──  .eslintrc.js                  eslint配置
├──  .gitignore                    git忽略文件
├──  favicon.ico                   网站图标
├──  index.template.ejs            页面模版
├──  package-lock.json             依赖包版本锁定文件
├──  package.json                  基础信息
├──  postcss.config.js             postcss配置
└──  README.md                     看看
```

## vue和stylus需要的几个包

```json
"devDependencies": {
  "eslint-plugin-import": "^2.9.0",
  "stylus": "^0.54.5",
  "stylus-loader": "^3.0.2",
  "vue-loader": "^14.2.1",
  "vue-style-loader": "^4.0.2",
  "vue-template-compiler": "^2.5.16",
},
"dependencies": {
  "vue": "^2.5.16",
  "vue-router": "^3.0.1"
}
```
