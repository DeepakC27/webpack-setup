import bike from '../../assets/bike.png'

export default class App {
  constructor (initalMoney = 0) {
    this.initalMoney = initalMoney
    this.currentAmount = initalMoney
    this.profit = 0
  }

  setImage = (ele) => {
    const img = document.createElement('img')
    img.src = bike
    ele.appendChild(img)
  }

  setProfit = () => {
    this.profit = this.currentAmount - this.initalMoney
  }

  getProfit = () => {
    this.setProfit()
    return this.profit
  }

  addMoney = (amount) => {
    this.currentAmount += amount
    return this.currentAmount
  }
}
