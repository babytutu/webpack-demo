# 说明

## install

```bash
npm i
```

## 常用命令

- 启动服务
`配置webpack/webpack.dev.js`

```bash
npm start
```

- 修复eslint
`eslint配置在.eslintrc.js文件中`

```bash
npm run lint-fix
```

- build
`配置webpack/webpack.prod.js`

```bash
npm run build
```

## 附加配置

- eslint
- babel

## 目录
```bash
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
