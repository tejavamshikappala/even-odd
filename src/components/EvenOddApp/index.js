import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  onIncrement = () => {
    this.setState({value: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {value} = this.state
    let Auth
    if (value % 2 === 0) {
      Auth = <p className="for-para">Count is Even</p>
    } else {
      Auth = <p className="for-para">Count is Odd</p>
    }
    return (
      <div className="for-outer-container">
        <div className="for-inner">
          <h1 className="for-header">Count {value}</h1>
          {Auth}
          <button
            className="for-button"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="for-second-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
