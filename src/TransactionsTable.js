import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { cardsMap } from './cardTypes'

export default ({data = []}) => <ReactTable
  defaultPageSize={14}
  data={data}
  columns={[
    { Header: 'Type', accessor: 'type', Cell: props => cardsMap[props.value] },
    { Header: 'Amount', accessor: 'amount' }
  ]}
/>