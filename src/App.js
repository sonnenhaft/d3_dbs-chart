import React, { Component } from 'react'
import TransactionsLineChart from './TransactionsLineChart'
import TransactionsTable from './TransactionsTable'
import TransactionsHeader from './TransactionsHeader'
import TransactionsPieChart from './TransactionsPieChart'
import { getRandomTransaction, DBS_PAYLAH } from './cardTypes'

import './App.css'

const data = []
for (let i = 0; i < 12; i++) {
  data.push(getRandomTransaction())
}

for (let i = 0; i < 8; i++) {
  data.push(getRandomTransaction(DBS_PAYLAH, 100))
}

class App extends Component {
  state = { data }

  onTransactionAdded = (value) => {
    const data = this.state.data.slice()
    data.unshift(value)
    this.setState({ data })
  }

  render() {
    return (
      <React.Fragment>
        <TransactionsHeader onTransactionAdded={this.onTransactionAdded}/>
        <div className="app-content">
          <div>
            <TransactionsTable data={this.state.data}/>
          </div>

          <div className="app-charts">
            <div>
              <TransactionsLineChart data={this.state.data}/>
            </div>
            <div>
              <TransactionsPieChart data={this.state.data}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
