import './main.scss'
import ErrorPage from './routes/ErrorPage'
import HomePage from './routes/Home'

const root = document.getElementsByClassName('root')[0]
const ROUTES = {
  '/': HomePage,
  '/error': ErrorPage
}

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
  root.appendChild(btn1)
  root.appendChild(btn2)
}

const renderContent = (pathName) => {
  root.innerHTML = ROUTES[pathName || window.location.pathname]
  RenderPathBtns()
}

const navOnClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderContent(pathName)
}

window.onpopstate = () => {
  renderContent()
}

renderContent()
