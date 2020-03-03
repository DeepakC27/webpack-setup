// import App from './app'
// const App = require('./app')

class TestinApp {
  renderEle = () => {
    const root = document.createElement('div')
    root.innerHTML = 'Content elements entry point ok'
    document.body.appendChild(root)
  }
}

const appObj = new TestinApp()
appObj.renderEle()
