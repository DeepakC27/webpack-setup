import App from './App'

const root = document.createElement('div')
root.innerHTML = 'Content elements entry point'
const appObj = new App(10)
let currentAmount = appObj.addMoney(5)
root.innerHTML += ('<br/> profit ' + currentAmount)
document.body.appendChild(root)

const renderEle = () => {
  const ar = [1, 2, 3, 4]
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
