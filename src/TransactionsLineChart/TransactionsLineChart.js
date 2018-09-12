import React, { Component } from 'react'
import createLineChart from './createLineChart'
import cardTypes from '../cardTypes'

const types = cardTypes.map(({ key }) => key)
const range = [50, 100, 200, 300, 500, 1000, 1001]
const legend = range.slice()
legend[legend.length - 1] = '1000+'
const reversedRange = range.reverse()

const countTransactions = arr => arr.sort().reverse().reduce((data, item) => {
  data[reversedRange.findIndex(value => value <= item)]++
  return data
}, reversedRange.slice().map(() => 0)).reverse()

// I am not checking props here, but in production will
export default class TransactionsLineChart extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount() {
    this.chart = createLineChart(this.canvasRef.current, legend)
    this.updateChart()
  }

  componentWillUpdate() {
    this.updateChart()
  }

  updateChart() {
    types.forEach((cardType, index) => {
      this.chart.data.datasets[index].data = countTransactions(this.props.data
        .filter(({ type }) => type === cardType).map(({ amount }) => amount))
    })

    this.chart.update()
  }

  render() {
    return <canvas ref={this.canvasRef}/>
  }
}
