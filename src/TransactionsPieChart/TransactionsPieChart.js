import React, { Component } from 'react'
import createPieChart from './createPieChart'
import cardTypes from '../cardTypes'

const types = cardTypes.map(({ key }) => key)

// I am not checking props here, but in production will
export default class TransactionsPieChart extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount() {
    this.chart = createPieChart(this.canvasRef.current)
    this.updateChart()
  }

  componentWillUpdate() {
    this.updateChart()
  }

  updateChart() {
    this.chart.data.datasets[0].data = types.map((cardType) => this.props.data
      .filter(({ type }) => type === cardType)
      .reduce((sum, { amount }) => sum + amount, 0))

    this.chart.update()
  }

  render() {
    return <canvas ref={this.canvasRef}/>
  }
}
