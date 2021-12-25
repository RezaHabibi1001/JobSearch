import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
let FindFriendStyle = {
  div: {
    backgroundColor: '#eeeeee',
    minHeight: '650px',
    textAlign: 'center',
  },
  table: {
    width: '450px',
    margin: 'auto',
    textAlign: 'left',
    borderRadius: '10px',
    border: '2px solid #dddddd',
    outline: '2px solid #cccccc',
  },

  tr: {
    borderBottom: '2px solid #cccccc',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#F1E5ACd0',
    opacity: 0.9,
  },

  span: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  follow: {
    backgroundColor: 'lightGreen',
  },
  unFollow: {
    backgroundColor: '#ff2222',
  },
}
export const FindFriend = () => {
  let state = {
    relation: 'followed',
  }
  let [relation, setRelation] = useState(state.relation)
  let changeRelation = () =>
    relation == 'followed' ? setRelation('Unfollowed') : setRelation('followed')

  const navigate = useNavigate()
  const routeChange = () => {
    navigate('/Content')
  }

  return (
    <div style={FindFriendStyle.div}>
      <br />
      <span style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
        Welcome Dear User, You can see your friennds here!
      </span>
      <hr />
      <form>
        <table style={FindFriendStyle.table}>
          <tr>
            <td colSpan="4" style={FindFriendStyle.tr}>
              <input
                type="search"
                name="friend"
                placeholder="Find your Friends"
                style={{ width: '300px', height: '25px', float: 'left' }}
              />
              <img
                src="/skip.png"
                width="20px"
                style={{ float: 'left', paddingLeft: '5px' }}
              />
            </td>
            <td style={FindFriendStyle.tr}></td>
          </tr>
          <tr style={{ backgroundColor: '#F1E5ACd0' }}>
            <td style={FindFriendStyle.tr}>Image</td>
            <td style={FindFriendStyle.tr}>FirstName</td>
            <td style={FindFriendStyle.tr}>LastName</td>
            <td style={FindFriendStyle.tr}>Relationship</td>
            <td style={FindFriendStyle.tr}>details</td>
          </tr>
          <tr>
            <td style={FindFriendStyle.tr}>
              <img width="40px" src="/reza.png" />
            </td>
            <td style={FindFriendStyle.tr}>Reza</td>
            <td style={FindFriendStyle.tr}>Habibi</td>
            <td style={FindFriendStyle.tr}>
              <input
                onClick={changeRelation}
                type="button"
                value={relation}
                style={
                  relation == 'followed'
                    ? FindFriendStyle.follow
                    : FindFriendStyle.unFollow
                }
              />
            </td>
            <td style={FindFriendStyle.tr}>
              <a href="">Profile</a>
            </td>
          </tr>
          <tr>
            <td style={FindFriendStyle.tr}>
              <img width="40px" src="/reza4.png" />
            </td>
            <td style={FindFriendStyle.tr}>Ah.Sina</td>
            <td style={FindFriendStyle.tr}>Saeedi</td>
            <td style={FindFriendStyle.tr}>
              <input
                type="button"
                value="Followed"
                style={{ backgroundColor: 'lightGreen' }}
              />
            </td>
            <td style={FindFriendStyle.tr}>
              <a href="">Profile</a>
            </td>
          </tr>{' '}
          <tr>
            <td style={FindFriendStyle.tr}>
              <img width="40px" src="/reza3.png" />
            </td>
            <td style={FindFriendStyle.tr}>Ehsan</td>
            <td style={FindFriendStyle.tr}>Sarshar</td>
            <td style={FindFriendStyle.tr}>
              <input
                type="button"
                value="Followed"
                style={{ backgroundColor: 'lightGreen' }}
              />
            </td>
            <td style={FindFriendStyle.tr}>
              <a href="">Profile</a>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}
