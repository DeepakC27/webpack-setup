// import layoutFile from './routes'
// import testFile from './routes/test'
const MAIN = import('./routes').then((module) => module.default)

const TEST = import('./routes').then((module) => module.default)

const pathJSMapping = () => {
  let path = window.location.pathname
  let jsFile
  switch (path) {
    case '/':
      jsFile = MAIN
      break
    case '/test': import('./routes/test').then(module => {
      jsFile = TEST
    })
      break
  }
  console.log('fileName: ', jsFile)
  return jsFile
}

const mappedJSFile = pathJSMapping()

export default mappedJSFile
