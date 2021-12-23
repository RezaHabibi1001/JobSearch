import { Link } from 'react-router-dom'
import React from 'react'
let HeadStyles = {
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
export const Head = () => {
  let d = new Date()

  let state = {
    showDate: d.toDateString(),
  }
  return (
    <div style={HeadStyles.div}>
      <span style={HeadStyles.span}>
        <Link to="/CreatePost">Create Post</Link>
      </span>
      <span style={HeadStyles.span}>
        <Link to="/AllPosts">Recent Posts</Link>
      </span>
      <span style={HeadStyles.span}>
        <Link to="/Profile">Profile Setting</Link>
      </span>
      <span
        style={{ fontWeight: 'bold', paddingRight: '30px', float: 'right' }}
      >
        {state.showDate}
      </span>
    </div>
  )
}
