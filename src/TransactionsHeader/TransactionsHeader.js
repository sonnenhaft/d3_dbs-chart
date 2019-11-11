import React, { useState } from 'react'
import cardTypes, { getRandomTransaction } from '../cardTypes'
import './TransactionsHeader.css'

export const TransactionsHeader = ({ onTransactionAdded }) => {
  const [{ type, amount }, setTransaction] = useState(getRandomTransaction());

  const sendRandom = () => {
    const randomValue = getRandomTransaction()
    setTransaction(randomValue)
    onTransactionAdded(randomValue)
  }

  const sendTransaction = () => onTransactionAdded({ amount, type });

  return <div className="transactions-header">
    <div className="transactions-header__labels">
      { cardTypes.map(({ key, value }) => <label key={ key }>
        <input type="radio" value={ key }
               checked={ type === key }
               onChange={ () => setTransaction({ type: key, amount }) } />
        { value }
      </label>) }
    </div>

    <div>
      <label>Amount</label>
      <input type="number" placeholder="Type amount here"
             onChange={ e => setTransaction({ amount: e.target.value, type }) }
             onKeyUp={ e => e.key === 'Enter' && sendTransaction() }
             value={ amount } />
    </div>

    <div>
      <button onClick={ sendTransaction }>Send</button>
    </div>

    <div>
      <button onClick={ sendRandom }>Send random</button>
    </div>
  </div>
}