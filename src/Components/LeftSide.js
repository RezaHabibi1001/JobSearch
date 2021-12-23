import React from 'react'
let LeftSideStyles = {
  div: {
    width: '20%',
    height: '700px',
    backgroundColor: '#333333',
    textAlign: 'center',
    color: '#ffffff',
    float: 'left',
  },
  span: {
    fontSize: 20,
    color: 'white',
  },
}
export const LeftSide = () => {
  return (
    <div style={LeftSideStyles.div}>
      <span style={{ marginTop: 20, fontSize: 20 }}>Management Section</span>
      <hr />
      <span style={{ marginTop: 40, fontSize: 20 }}>
        <link to="/CreateNewPost">Create New Post</link>
      </span>
      <br />
      <br />
      <span style={{ marginTop: 60, fontSize: 20 }}>
        <link to="/Posts">See Recent Posts</link>
      </span>
      <br />
      <br />
      <span style={{ marginTop: 80, fontSize: 20 }}>
        <link to="/Profile">Change Profile Setting</link>
      </span>
    </div>
  )
}
