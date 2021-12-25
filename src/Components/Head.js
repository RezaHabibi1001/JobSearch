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
    paddingLeft: '10px',
  },
}
export const Head = () => {
  return (
    <div style={HeadStyles.div}>
      <span style={HeadStyles.span}>
        <Link to="/CreatePost">Create Post</Link>
      </span>
      <span style={HeadStyles.span}>
        <Link to="/AllPosts">Recent Posts</Link>
      </span>
      <span style={HeadStyles.span}>
        <Link to="/AllFriends">AllFriends</Link>
      </span>
      <span style={HeadStyles.span}>
        <Link to="/Profile">Profile Setting</Link>
      </span>
      <span style={HeadStyles.span}>
        <Link to="/FindFriend">Find Friend</Link>
      </span>
    </div>
  )
}
