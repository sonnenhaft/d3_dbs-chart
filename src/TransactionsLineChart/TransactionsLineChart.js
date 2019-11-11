import React, { useRef, useEffect, useState } from 'react'
import cardTypes from '../cardTypes'
import createLineChart from './createLineChart'

const types = cardTypes.map(({ key }) => key)
const range = [50, 100, 200, 300, 500, 1000, 1001]
const legend = range.slice()
legend[legend.length - 1] = '1000+'
const reversedRange = range.reverse()

const countTransactions = arr => arr.sort().reverse().reduce((data, item) => {
  data[reversedRange.findIndex(value => value <= item)]++

  return data
}, reversedRange.slice().map(() => 0)).reverse()

export const TransactionsLineChart = ({ data }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const chart = createLineChart(canvasRef.current, legend);
    setChart(chart);

    return () => chart.destroy();
  }, []);

  useEffect(() => {
    if (!chart) {
      return;
    }

    types
      .map(cardType => data.filter(({ type }) => type === cardType).map(({ amount }) => amount))
      .forEach((amounts, index) => chart.data.datasets[index].data = countTransactions(amounts))

    chart.update()
  }, [data, chart]);

  return <canvas ref={ canvasRef } />
}