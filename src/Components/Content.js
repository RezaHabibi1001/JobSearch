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
      <span>This is the Content</span>
    </div>
  )
}
