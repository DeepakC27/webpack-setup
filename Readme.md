# Setting up react repo from scratch

Things to be covered

  - Transpiling js using babel
  - Setting up webpack
  - Webpack config to get it working with plan js
  - Codespliting & Lazy loading
  - Chunks
  - Adding react to the repo
  -

## Working with Babel
#### Installation
```
npm i --save-dev @babel/cli @babel/core
npm i --save-dev @babel/plugin-proposal-class-properties @babel/plugin-transform-arrow-functions
```
Basic plugins installted for the conversions
#### Setup
create .babelrc file to add installted plugins
#### To run server
```
npm i --save-dev live-server
live-server /public
```

#### Babel Info
Transpiles js to lower verions of js for browser to understand
i.g
ES6
`const load = () => { console.log('add entry point') }`
After transpiling
`
var load = function load() {
  console.log('add entry point');
};
`

npm scripts to run babel
```
"start:babel": "babel src/index.js  --out-file=public/main.js --watch"
"start:babel:dev": "babel src/index.js  --out-file=public/main.js --source-maps --watch"
```
[--source-maps][sourcemapRef] to map a combined/minified file back to an unbuilt state

[sourcemapRef]: https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/


## Working with webpack

#### installation
```
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```
#### Setup
Create webpack.config.js
```
// build config
prodconfig = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
     },
    module: {
        rules: [
          // babel-loader....
        ]
    }
}

// dev server config
const HtmlWebpackPlugin = require('html-webpack-plugin')
devConfig = {
    mode: 'development',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),  
    },
    plugins: [
    new HtmlWebpackPlugin({
      // template to copy index.html into dist folder
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}
```



*Table*

| Heading | Heading |
| ------ | ------ |
| Content | Content |
