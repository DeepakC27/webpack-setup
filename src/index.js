import './main.scss'
import HomePage from './routes/HomePage'
const root = document.getElementsByClassName('root')[0]

const RenderPathBtns = () => {
  const btn1 = document.createElement('button')
  const btn2 = document.createElement('button')
  btn1.innerHTML = 'Home Page'
  btn1.setAttribute('class', 'nav-path-btn')
  btn2.innerHTML = 'Error Page'
  btn2.setAttribute('class', 'nav-path-btn')
  btn1.onclick = () => {
    console.log('home page')
    navOnClick('/')
  }
  btn2.onclick = () => {
    console.log('error page')
    navOnClick('/error')
  }
  const seperator = document.createElement('span')
  seperator.innerHTML = '>'
  root.appendChild(btn1)
  root.appendChild(seperator)
  root.appendChild(btn2)
}

const renderContent = (pathName) => {
  let path = pathName || window.location.pathname
  if (path === '/error') {
    import(/* webpackChunkName: 'errorPage' */'./routes/ErrorPage')
    .then(({ default: module }) => {
      root.innerHTML = module
      RenderPathBtns()
    })
    .catch(err => console.error('err: ', err))
  } else {
    root.innerHTML = HomePage
    RenderPathBtns()
  }
}

const navOnClick = (pathName) => {
  if (pathName === window.location.pathname) {
    return
  }
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderContent(pathName)
}

window.onpopstate = renderContent

renderContent()
