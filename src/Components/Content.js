import React from 'react'
let ContentStyles = {
  div: {
    backgroundColor: '#eeeeee',
    height: '660px',
    width: '100%',
    textAlign: 'center',
    float: 'left',
  },
}
export const Content = () => {
  return (
    <div style={ContentStyles.div}>
      <br />
      <br />
      <span style={{ fontSize: '30px', paddingTop: '30px', color: 'green' }}>
        Welcome to our Application{' '}
      </span>
    </div>
  )
}
