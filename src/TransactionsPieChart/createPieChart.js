import Chart from 'chart.js'
import cardTypes from '../cardTypes'

export default canvasNode => new Chart(canvasNode.getContext('2d'), {
  type: 'pie',
  data: {
    datasets: [{
      data: [1, 1, 1],
      backgroundColor: cardTypes.map(({ color }) => color)
    }],
    labels: cardTypes.map(({ value }) => value)
  }
})
