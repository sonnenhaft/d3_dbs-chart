import React, { useState } from 'react'

import './App.css'
import { DBS_PAYLAH, getRandomTransaction } from './cardTypes'
import TransactionsHeader from './TransactionsHeader'
import { TransactionsLineChart } from './TransactionsLineChart'
import TransactionsPieChart from './TransactionsPieChart'
import TransactionsTable from './TransactionsTable'

const App = () => {
  const [data, setData] = useState(() => [
    ...Array.from(new Array(142)).map(() => getRandomTransaction()),
    ...Array.from(new Array(8)).map(() => getRandomTransaction(DBS_PAYLAH, 100))
  ])

  return <>
    <TransactionsHeader onTransactionAdded={ value => setData([value, ...data]) } />
    <div className="app-content">
      <div>
        <TransactionsTable data={ data } />
      </div>

      <div className="app-charts">
        <div>
          <TransactionsLineChart data={ data } />
        </div>
        <div>
          <TransactionsPieChart data={ data } />
        </div>
      </div>
    </div>
  </>
}

export default App
