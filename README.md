#packpagejson-loader

## About
当你开发一个包含多个组件库的大型组件库时，这个组件库包含有很多的package.json
这个loader将帮你把这些package.json读取出来并作为一个数组输出。

我主要是利用这些做一个前端的路由列表，可以很方便的加载这些子项目。
用在前端组件库的开发中，用这些列表写一个展示页面。

## Config
你可以在你的webpack里配置packpagejson-loader

You can config the loader's behavior by adding an `json` field in your webpack config:

``` js
var webpack = require('webpack')
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var PACKAGE_PATH = path.resolve(ROOT_PATH, 'packages'); // 这里配置的子项目的地址
// webpack.config.js
module: {
    loaders: [
    {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'packpagejson-loader?path='+PACKAGE_PATH
    }
    ]
}
```

## Getting Started

首先在在webpack入口文件里引入主项目的package.json

``` javascript
import packageList from '../../package.json'
// 这里的 packageList 包含了主项目的package.json内容，以及主项目"dependencies"下的所有子项目的package.json
```



## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)


## License

MIT (http://www.opensource.org/licenses/mit-license.php)
