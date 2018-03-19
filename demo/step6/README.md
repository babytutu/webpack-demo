## 从step5开始
先把step5的代码完整拷贝到step6

```bash
cp -r step5 step6
cd step6
```

## 结合vue开发

```bash
npm i vue vue-router
npm i vue-loader vue-style-loader vue-template-compiler -D
npm i stylus stylus-loader -D
```

需要为`.vue`和`.styl`文件增加`loader`设置
vue推荐用单文件模式开发，就是`.vue`文件中包含了`script`和`css`等
开发模式，优先于`postcss-loader`加载的规则如`stylus-loader`需要设置`sourceMap`

webpack.dev.js
```js
+  {
+    test: /\.styl$/,
+    use: [
+      'style-loader',
+      'css-loader',
+      'postcss-loader',
+      { loader: 'stylus-loader', options: { sourceMap: false } },
+    ]
+  },
+  {
+    test: /\.vue$/,
+    loader: 'vue-loader',
+    options: {
+      loaders: {
+        js: ['babel-loader', 'eslint-loader'],
+        css: [
+          'vue-style-loader',
+          'css-loader',
+          'postcss-loader',
+        ],
+        stylus: [
+          'vue-style-loader',
+          'css-loader',
+          'postcss-loader',
+          { loader: 'stylus-loader', options: { sourceMap: false } },
+        ],
+      },
+    },
+  },
```

生产环境需要抽离`css`和`stylus`
webpack.prod.js
```js
+  {
+    test: /\.styl$/,
+    use: [
+      MiniCssExtractPlugin.loader,
+      'css-loader',
+      'postcss-loader',
+      'stylus-loader'
+    ],
+  },
+  {
+    test: /\.vue$/,
+    loader: 'vue-loader',
+    options: {
+      loaders: {
+        js: [
+          'babel-loader',
+          'eslint-loader'
+        ],
+        css: [
+          'vue-style-loader',
+          MiniCssExtractPlugin.loader,
+          'css-loader',
+          'postcss-loader'
+        ],
+        stylus: [
+          'vue-style-loader',
+          MiniCssExtractPlugin.loader,
+          'css-loader',
+          'postcss-loader',
+          'stylus-loader'
+        ],
+      },
+    },
+  },
```

增加`eslint`插件
```bash
npm i eslint-plugin-import -D
```

设置规则
.eslintrc.js
```js
  // required to lint *.vue files
  plugins: [
    'html',
  ],
```