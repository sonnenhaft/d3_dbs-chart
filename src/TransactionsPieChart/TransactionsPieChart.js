import React, { useRef, useEffect, useState } from 'react'
import createPieChart from './createPieChart'
import cardTypes from '../cardTypes'

const types = cardTypes.map(({ key }) => key)

export const TransactionsPieChart = ({ data }) => {
  const ref = useRef(null);
  const [chart, setChart] = useState(null);
  useEffect(() => {
    const chart = createPieChart(ref.current);
    setChart(chart);

    return () => chart.destroy();
  }, []);

  useEffect(() => {
    if (!chart) {
      return;
    }

    chart.data.datasets[0].data = types.map((cardType) => data
      .filter(({ type }) => type === cardType)
      .reduce((sum, { amount }) => sum + amount, 0))

    chart.update()
  }, [data, chart]);

  return <canvas ref={ ref } />
}
