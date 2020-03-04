// import layoutFile from './routes'
// import testFile from './routes/test'

const pathJSMapping = () => {
  let path = window.location.pathname
  let jsFile
  switch (path) {
    case '/': import('./routes').then(module => {
      jsFile = module
    })
      break
    case '/test': import('./routes/test').then(module => {
      jsFile = module
    })
      break
  }
  return jsFile
}

const mappedJSFile = pathJSMapping()

export default mappedJSFile
