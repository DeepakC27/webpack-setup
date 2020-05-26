import './main.scss'

const HOME_PAGE = import('./routes/Home').then((module) => module.default)
const ERROR_PAGE = import('./routes/ErrorPage').then((module) => module.default)

const pathJSMapping = () => {
  let path = window.location.pathname
  let jsFile
  switch (path) {
    case '/':
      jsFile = HOME_PAGE
      break
    case '/test': ERROR_PAGE
      break
  }
  console.log('fileName: ', jsFile)
  return jsFile
}

const mappedJSFile = pathJSMapping()

export default mappedJSFile
