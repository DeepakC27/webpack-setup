# Setting up react repo from scratch

Things to be covered

  - Transpiling js using babel
  - Setting up webpack
  - Webpack config to get it working with plan js
  - Codespliting & Lazy loading
  - Chunks
  - Adding react to the repo
  -

##### Babel
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
[--source-maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) to map a combined/minified file back to an unbuilt state
