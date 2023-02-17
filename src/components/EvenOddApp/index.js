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
      Auth = <p className="forPara">Count is Even</p>
    } else {
      Auth = <p className="forPara">Count is Odd</p>
    }
    return (
      <div className="for_outer_container">
        <div className="for_inner">
          <h1 className="forHeader">Count {value}</h1>
          {Auth}
          <button
            className="for_button"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="forSecondPara">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
