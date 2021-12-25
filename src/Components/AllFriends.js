import React from 'react'
import { useNavigate } from 'react-router-dom'
let AllFriendsStyle = {
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
}
export const AllFriends = () => {
  const navigate = useNavigate()

  const routeChange = () => {
    navigate('/Content')
  }

  return (
    <div style={AllFriendsStyle.div}>
      <br />
      <span style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
        Welcome Dear User, You can see your friennds here!
      </span>
      <hr />
      <form>
        <table style={AllFriendsStyle.table}>
          <tr>
            <td colSpan="4" style={AllFriendsStyle.tr}>
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
            <td style={AllFriendsStyle.tr}></td>
          </tr>
          <tr style={{ backgroundColor: '#F1E5ACd0' }}>
            <td style={AllFriendsStyle.tr}>Image</td>
            <td style={AllFriendsStyle.tr}>FirstName</td>
            <td style={AllFriendsStyle.tr}>LastName</td>
            <td style={AllFriendsStyle.tr}>Relationship</td>
            <td style={AllFriendsStyle.tr}>details</td>
          </tr>
          <tr>
            <td style={AllFriendsStyle.tr}>
              <img width="40px" src="/reza.png" />
            </td>
            <td style={AllFriendsStyle.tr}>Reza</td>
            <td style={AllFriendsStyle.tr}>Habibi</td>
            <td style={AllFriendsStyle.tr}>
              <input
                type="button"
                value="Followed"
                style={{ backgroundColor: 'lightGreen' }}
              />
            </td>
            <td style={AllFriendsStyle.tr}>
              <a href="">Profile</a>
            </td>
          </tr>
          <tr>
            <td style={AllFriendsStyle.tr}>
              <img width="40px" src="/reza4.png" />
            </td>
            <td style={AllFriendsStyle.tr}>Ah.Sina</td>
            <td style={AllFriendsStyle.tr}>Saeedi</td>
            <td style={AllFriendsStyle.tr}>
              <input
                type="button"
                value="Followed"
                style={{ backgroundColor: 'lightGreen' }}
              />
            </td>
            <td style={AllFriendsStyle.tr}>
              <a href="">Profile</a>
            </td>
          </tr>{' '}
          <tr>
            <td style={AllFriendsStyle.tr}>
              <img width="40px" src="/reza3.png" />
            </td>
            <td style={AllFriendsStyle.tr}>Ehsan</td>
            <td style={AllFriendsStyle.tr}>Sarshar</td>
            <td style={AllFriendsStyle.tr}>
              <input
                type="button"
                value="Followed"
                style={{ backgroundColor: 'lightGreen' }}
              />
            </td>
            <td style={AllFriendsStyle.tr}>
              <a href="">Profile</a>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}
