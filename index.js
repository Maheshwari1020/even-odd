import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  OnIncrease = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading"> Count {count} </h1>
          <p> Count is {displayText}</p>
          <button type="button" className="button" onClick={this.OnIncrease}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
