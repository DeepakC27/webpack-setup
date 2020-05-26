import Savings from './Savings'
import './index.scss'

const root = document.getElementsByClassName('root')[0]

const render = () => {
  renderHeader()
  renderAsyncData()
}

const renderHeader = () => {
  root.innerHTML = '<h1>Home page </h1>'
  const appObj = new Savings(10)
  let currentAmount = appObj.addMoney(5)
  appObj.setImage(root)
  root.innerHTML += ('<br/> <h3>Profit</h3> ' + currentAmount + '<br/><br/><h3>Steps to be done</h3>')
}

const renderAsyncData = () => {
  const renderEle = () => {
    const ar = ['Babel', 'Webpack Setup', 'Build', 'Styles loader', 'Chunk handling']
    const arTag = document.createElement('ul')
    ar.map(data => {
      let nestTag = document.createElement('li')
      nestTag.innerHTML = data
      arTag.appendChild(nestTag)
    })
    root.appendChild(arTag)
  }
  (() => (
    new Promise(resolve => {
      setTimeout(() => {
        resolve(renderEle())
      }, 1500)
    })
  ))()
}


export default render()
