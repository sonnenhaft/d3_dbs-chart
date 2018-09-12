import React, { Component } from 'react'
import './TransactionsHeader.css'
import cardTypes, { getRandomTransaction } from '../cardTypes'

export default class TransactionsHeader extends Component {
  state = getRandomTransaction()

  sendRandom = () => {
    const randomValue = getRandomTransaction()
    this.setState({
      type: randomValue.type,
      amount: randomValue.amount
    })
    this.onTransactionAdded()
  }

  onTransactionAdded = () => {
    const { type, amount } = this.state
    this.props.onTransactionAdded({ type: type, amount })
  }

  render() {
    return <div className="transactions-header">
      <div className="transactions-header__labels">
        {cardTypes.map(({ key, value }) => <label key={key}>
          <input type="radio" value={key}
                 checked={this.state.type === key}
                 onChange={() => this.setState({ type: key })}/>
          {value}
        </label>)}
      </div>

      <div>
        <label>Amount</label>
        <input type="number" placeholder="Type amount here"
               onChange={e => this.setState({ amount: e.target.value })}
               value={this.state.amount}/>
      </div>


      <div>
        <button onClick={this.onTransactionAdded}>send</button>
      </div>

      <div>
        <button onClick={this.sendRandom}>Send random</button>
      </div>
    </div>
  }
}