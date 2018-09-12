import Chart from 'chart.js'
import cardTypes from '../cardTypes'

export default (dom, legend) => new Chart(dom.getContext('2d'), {
  type: 'line',
  data: {
    labels: legend,
    datasets: cardTypes.map(item => ({
      label: item.value,
      backgroundColor: item.color,
      borderColor: item.color,
      data: [],
      fill: false
    }))
  },
  options: {
    title: {
      display: true,
      text: 'Transactions rounded to range values'
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Transaction'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Trancations count'
        }
      }]
    }
  }
})
