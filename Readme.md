# Setting up webpack & babel repo from scratch

Following are the topic covered in the repo
  - Transpiling js using babel
  - Setting up webpack
  - Codespliting & Lazy loading
  - Chunks
  - Optimizing
  - Route handling

## Folder Structure
```
.
├── config                      # Webpack configs
│   └── webpack.config.js       
│   └── bwebpack.loaders.js     
├── public                      # HTML templates
│   └── build.html              
│   └── index.html              
├── src                     
│   ├── assets                          
│   ├── routes
│   │   ├── index.js            #  Route based handling
│   │   ├── main.scss           #  Root styles
│   │   ├── HomePage             
│   │   │   ├── index.js     
│   │   │   ├── index.scss  
│   │   └── Error Page       
│   │       ├── index.js    
│   │   │   ├── index.scss 
│   ├── .babel.rc   
```



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
const config = {
  mode: 'development' || 'production',
  entry: 'entry file',
  output: 'output file',
  optimization: { minimizer: [] }
  plugins: [],
  module: {
    rules: []
  }
}
```
This is the basic webConfig you can setup for both dev & mode
- [output][wb-output]
    For prod  hashing is done `js/[name].[contenthash].js` to update only if file has changed
- [module][wb-module]
    Used minimun set of plugins req to getting started with vanilla JS
    - Babel
    - Scss (optional)
     ** In the config used in dev i have inject styles directly into html file whereas in in prod it is minified & imported  using diff css file. Bcse in dev recompiling & bundling takes more time rather than directly injecting the styles.
    - html-loader
    - file-loader
- [plugins][wb-plugin]
 Plugin used in the code
    - HtmlWebpackPlugin (for html template)
    - MiniCssExtractPlugin (For minifying css)
- [optimization][wb-optmization] 
    - OptimizeCSSPlugin
    - TerserPlugin (minify JS)
    - HtmlWebpackPlugin (minify html)

Common loaders are keps seperatly in diff file & to merge as per the env
`webpack-merge` is used.
```
const mergeWebpack = require('webpack-merge')
mergeWebpack(config, devConfig)
```
  
## Route handing in vanialla JS
| Path | File |
| ------ | ------ |
| '/' | HomePage |
| '/error' | ErrorPage |

Used onpopState to  re-render the content based on the updated path.
```
const renderContent = (pathName) => {
  root.innerHTML = ROUTES[pathName || window.location.pathname]
}

const navOnClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderContent(pathName)
}

window.onpopstate = () => renderContent
```


[wb-plugin]: https://webpack.js.org/plugins/
[wb-module]: https://webpack.js.org/configuration/module/
[wb-output]: https://webpack.js.org/configuration/output/
[wb-optmization]: https://webpack.js.org/configuration/optimization/
