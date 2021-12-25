import { Link } from 'react-router-dom'
import React from 'react'
let EmptyHeaderStyle = {
  div: {
    backgroundColor: '#F1E5ACd0',
    height: '60px',
    paddingTop: 40,
  },
  span: {
    fontWeight: 'bold',
    paddingLeft: '20px',
  },
}
export const EmptyHeader = () => {
  let d = new Date()

  let state = {
    showDate: d.toDateString(),
  }
  return (
    <div style={EmptyHeaderStyle.div}>
      <span
        style={{ fontWeight: 'bold', paddingRight: '30px', float: 'right' }}
      >
        {state.showDate}
      </span>
    </div>
  )
}
